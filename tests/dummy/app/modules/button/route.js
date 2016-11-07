import Route from 'ember-route';
import faker from 'faker';

export default Route.extend({
  model() {
    return {
      button: [
        {
          text: faker.finance.accountName(),
          color: "white",
          icon: "shopping-tag-content",
          disabled: false,
          expand: false,
        },
        {
          text: faker.finance.accountName(),
          color: "blue",
          icon: "trash",
          disabled: false,
          expand: false,
        },
        {
          text: faker.address.countryCode(),
          color: "purple",
          icon: "ui-simple-add",
          disabled: false,
          expand: false,
        },
        {
          text: faker.finance.transactionType(),
          color: "green",
          icon: "ui-star-empty",
          disabled: false,
          expand: false,
        },
        {
          text: faker.finance.mask(),
          color: "red",
          icon: "education-award",
          disabled: false,
          expand: false,
        },
        {
          text: faker.name.firstName(),
          color: "golden",
          icon: "building",
          disabled: false,
          expand: false,
        },
        {
          text: faker.name.firstName(),
          color: "blank",
          icon: "brush",
          disabled: false,
          expand: false,
        },
        {
          text: faker.name.firstName(),
          color: "gray",
          icon: "eye-solid",
          disabled: false,
          expand: false,
        },
        {
          text: faker.name.firstName(),
          color: "border",
          icon: "files-folder",
          disabled: false,
          expand: false,
        },
        {
          text: faker.name.firstName(),
          color: "dark",
          icon: "ui-grid-square",
          disabled: false,
          expand: false,
        },
        {
          text: faker.name.firstName(),
          color: "",
          icon: "ui-round-e-help",
          disabled: true,
          expand: false,
        },
        {
          text: faker.name.firstName(),
          color: "dark",
          icon: "rocket",
          disabled: false,
          expand: true,
        },
        {
          text: faker.name.firstName(),
          color: "blank",
          icon: "ui-link",
          disabled: false,
          expand: true,
        },
        {
          text: faker.name.firstName(),
          size: "s",
          color: "blank",
          icon: "",
          disabled: false,
          half: true,
          expand: true,
        },
      ],
      iconButton: [
        {
          icon: "ui-grid-square",
          size: "16px",
          color: "",
        },    {
          icon: "ui-star",
          size: "16px",
          color: "",
        },
        {
          icon: "ui-round-e-help",
          size: "16px",
          color: "",
        },
        {
          icon: "trash",
          size: "16px",
          color: "",
        }
      ]
    };
  }
});
