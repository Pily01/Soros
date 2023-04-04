import { useContext } from "react";
import FormContext from "../context/form.context";

const useFormContext = () => {
  return (
    useContext(FormContext)
  )
}

export default useFormContext