import theme from "@/context/theme/theme";
import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";

const TextareaField = ({
  id,
  title,
  name,
  type,
  value,
  onChange,
  readOnly,
  isRequired,
  placeholder,
}) => {
  return (
    <FormControl id={id} isRequired={isRequired}>
      <FormLabel>{title}</FormLabel>
      <Textarea
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        placeholder={placeholder}
        focusBorderColor={theme.colors.primary[500]}
        boxShadow="sm"
      />
    </FormControl>
  );
};

export default TextareaField;
