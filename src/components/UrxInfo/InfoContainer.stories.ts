import { InfoContainer } from "./InfoContainer";
import { formConfig } from "./info-data";

export default {
  component: InfoContainer,
  title: 'UrxInfo',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    className: 'short-form',
    formConfig,
  },
};
