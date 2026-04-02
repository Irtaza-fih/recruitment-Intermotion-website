import { useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";

const TRANSITION_MS = 580;

// Shared transition state so overlay can read it
let transitionPhaseGlobal: "idle" | "in" | "out" = "idle";
let listeners: Array<(phase: "idle" | "in" | "out") => void> = [];

export function getTransitionPhase() {
  return transitionPhaseGlobal;
}

function setPhase(phase: "idle" | "in" | "out") {
  transitionPhaseGlobal = phase;
  listeners.forEach((l) => l(phase));
}

export function subscribeTransition(fn: (phase: "idle" | "in" | "out") => void) {
  listeners.push(fn);
  return () => {
    listeners = listeners.filter((l) => l !== fn);
  };
}

export function useAppNavigate() {
  const navigate = useNavigate();
  const busyRef = useRef(false);

  const go = useCallback(
    (path: string) => {
      if (busyRef.current) return;
      busyRef.current = true;
      setPhase("in");
      setTimeout(() => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
        setPhase("out");
        setTimeout(() => {
          setPhase("idle");
          busyRef.current = false;
        }, TRANSITION_MS);
      }, TRANSITION_MS);
    },
    [navigate]
  );

  return go;
}
