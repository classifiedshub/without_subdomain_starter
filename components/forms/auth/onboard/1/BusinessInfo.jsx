import InputField from "@/components/inputs/InputField";
import { Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentStep,
  updateOnboardFormData,
} from "@/redux/slices/OnboardSlice";
import DropdownField from "@/components/inputs/DropdownField";
import { businessCategories, roles, teamSizeOptions } from "@/data/onboardData";
import OnboardNavButton from "./OnboardNavButton";
import theme from "@/context/theme/theme";
import { counties } from "@/data/countries";

const BusinessInfo = ({ data }) => {
  const dispatch = useDispatch();
  const currentStep = useSelector((store) => store.onboard.currentStep);
  const existingFormData = useSelector(
    (store) => store.onboard.onboardFormData
  );

  const [role, setRole] = useState(existingFormData.role || "");
  const [industry, setIndustry] = useState(existingFormData.industry || "");
  const [teamSize, setTeamSize] = useState(existingFormData.teamSize || "");
  const [selectedCounty, setSelectedCounty] = useState(existingFormData.county || "");
  const [selectedRegion, setSelectedRegion] = useState(existingFormData.region || "");

  const [formData, setFormData] = useState({
    ...existingFormData,
    businessName: existingFormData.businessName || "",
    description: existingFormData.description || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDropdownChange = (name, value) => {
    if (name === "role") {
      setRole(value);
    } else if (name === "industry") {
      setIndustry(value);
    } else if (name === "teamSize") {
      setTeamSize(value);
    }
  };

  const handleCountySelect = (county) => {
    setSelectedCounty(county);
    setSelectedRegion(null);
  };

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
  };

  const areas = counties.map((county) => ({
    label: county.label,
    value: county.value,
  }));

  const regionsOptions = selectedCounty
    ? counties.find((region) => region.value === selectedCounty.value).regions
    : [];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      county: selectedCounty,
      region: selectedRegion,
      role: role,
      industry: industry,
      teamSize: teamSize,
    };
    dispatch(updateOnboardFormData(data));
    dispatch(setCurrentStep(currentStep + 1));
    console.log(data);
  };

  return (
    <Stack spacing={4} as="form" onSubmit={handleSubmit}>
      <Heading fontSize="2xl">Business Details</Heading>
      <Stack bg="white" p={6} borderRadius="lg">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
          <InputField
            id="business-name"
            title="Business name"
            name="businessName"
            type="text"
            value={formData.businessName}
            onChange={handleChange}
            isRequired={true}
          />
          <InputField
            id="description"
            title="Description"
            name="description"
            type="text"
            value={formData.description}
            onChange={handleChange}
          />
          <DropdownField
            items={areas}
            onSelect={handleCountySelect}
            title="Select a County"
            name="county"
            isRequired={true}
            selectedItem={selectedCounty}
            placeholder="Select a county"
            dropdownColumns={1}
          />
          <DropdownField
            items={regionsOptions}
            onSelect={handleRegionSelect}
            title="Select a Region"
            name="region"
            isRequired={true}
            selectedItem={selectedRegion}
            placeholder="Select a region"
            dropdownColumns={3}
          />
          <DropdownField
            title="Industry"
            name="industry"
            items={businessCategories}
            selectedItem={businessCategories.find(
              (category) => category.value === industry
            )}
            onSelect={(item) => handleDropdownChange("industry", item.value)}
            buttonProps={{ bg: theme.colors.primary[100] }}
          />
          <DropdownField
            title="Role"
            name="role"
            items={roles}
            selectedItem={roles.find((position) => position.value === role)}
            onSelect={(item) => handleDropdownChange("role", item.value)}
            buttonProps={{ bg: theme.colors.primary[100] }}
          />

          <DropdownField
            title="Team Size"
            name="teamSize"
            items={teamSizeOptions}
            selectedItem={teamSizeOptions.find(
              (option) => option.value === teamSize
            )}
            onSelect={(item) => handleDropdownChange("teamSize", item.value)}
            buttonProps={{ bg: theme.colors.primary[100] }}
            dropdownColumns={1}
          />
        </SimpleGrid>
      </Stack>
      <OnboardNavButton />
    </Stack>
  );
};

export default BusinessInfo;
