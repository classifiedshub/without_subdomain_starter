import theme from "@/context/theme/theme";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputField = ({
  id,
  title,
  name,
  type,
  value,
  onChange,
  readOnly,
  isRequired,
  placeholder,
  leftAddon,
  rightAddon,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => setShowPassword(!showPassword);

  return (
    <FormControl id={id} isRequired={isRequired}>
      <FormLabel>{title}</FormLabel>
      <InputGroup>
        {leftAddon && (
          <InputLeftAddon bg="none" borderColor="transparent" size="sm">
            {leftAddon}
          </InputLeftAddon>
        )}
        <Input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          name={name}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          placeholder={placeholder}
          focusBorderColor={theme.colors.primary[500]}
          boxShadow="sm"
        />
        {type === "password" || rightAddon ? (
          <InputRightAddon bg="none" borderColor="transparent">
            {type === "password" ? (
              <IconButton
                aria-label={showPassword ? "Hide password" : "Show password"}
                icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                onClick={handleClick}
                variant="link"
                size="sm"
              />
            ) : (
              rightAddon
            )}
          </InputRightAddon>
        ) : null}
      </InputGroup>
    </FormControl>
  );
};

export default InputField;
