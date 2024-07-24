import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button,
  FormControl,
  FormLabel,
  SimpleGrid,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import React from "react";
import theme from "@/context/theme/theme";

const DropdownField = ({
  items,
  onSelect,
  buttonProps,
  menuProps,
  title,
  name,
  isRequired,
  selectedItem,
  placeholder = "Select an option",
  dropdownColumns = 2,
}) => {
  return (
    <FormControl isRequired={isRequired}>
      <FormLabel>{title}</FormLabel>
      <Menu {...menuProps}>
        <MenuButton as={Button} rightIcon={<FiChevronDown />} {...buttonProps}>
          {selectedItem ? (
            selectedItem.image ? (
              <HStack>
                <Image
                  src={selectedItem.image}
                  boxSize="20px"
                  alt={selectedItem.label}
                />
                <Text>{selectedItem.label}</Text>
              </HStack>
            ) : (
              <Text>
                {selectedItem.label}
              </Text>
            )
          ) : (
            placeholder
          )}
        </MenuButton>
        <MenuList p={2} overflowY="auto">
          <SimpleGrid columns={dropdownColumns} spacing={2}>
            {items.map((item, index) => (
              <React.Fragment key={index}>
                {item.divider ? (
                  <MenuDivider />
                ) : (
                  <MenuItem
                    onClick={() => onSelect(item)}
                    name={name}
                    _hover={{
                      bg: theme.colors.primary[600],
                      color: "white",
                      borderRadius: "lg",
                    }}
                  >
                    {item.image && (
                      <HStack spacing={2}>
                        <Image
                          src={item.image}
                          boxSize="24px"
                          alt={item.label}
                        />
                        <Text>{item.label}</Text>
                      </HStack>
                    )}
                    {!item.image && item.label}
                  </MenuItem>
                )}
              </React.Fragment>
            ))}
          </SimpleGrid>
        </MenuList>
      </Menu>
    </FormControl>
  );
};

export default DropdownField;
