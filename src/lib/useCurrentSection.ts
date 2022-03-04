import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { lectureService } from "../lecture";

export const useCurrentSection = () => {
  const params = useParams();
  const [section, setSection] = useState(
    () => lectureService.fromPath(params.chapter!, params.section!)
  );

  useEffect(() => {
    setSection(lectureService.fromPath(params.chapter!, params.section!));
  }, [params.chapter, params.section]);

  return section;
};
