import { useEffect } from "react";

const VACANCIES_URL = "https://app.rec-motion.eu/board/recruitment-intermotion";

export default function VacanciesPage() {
  useEffect(() => {
    window.location.replace(VACANCIES_URL);
  }, []);

  return null;
}
