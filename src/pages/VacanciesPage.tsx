import { useEffect } from "react";

import { VACANCIES_URL } from "@/lib/links";

export default function VacanciesPage() {
  useEffect(() => {
    window.location.replace(VACANCIES_URL);
  }, []);

  return null;
}
