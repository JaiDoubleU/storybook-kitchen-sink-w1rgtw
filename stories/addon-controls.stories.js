export default {
  title: 'Addons/Controls',
  argTypes: {
    label: { type: { name: 'string' } },
  },
};

const Template = ({ label }) => {
  return `<div style="height: 100vh; display: grid; place-items: center; font-size: 3em;">${label}</div>`;
};

export const Hello = Template.bind({});




Hello.args = {
  label: 'Hello'
};















export const Bonjour = Template.bind({});
Bonjour.args = { label: 'Bonjour!' };
