import Controller from 'ember-controller';

export default Controller.extend({
  menus: [{
    title: 'Product',
    items: [
      { name: 'Designer', route: 'index' },
      { name: 'Feature Index', route: 'index' },
      { name: 'Community', route: 'index' },
      { name: 'Plans & Pricing', route: 'index' },
      { name: 'Templates', route: 'index' },
      { name: 'Company', route: 'index' },
    ]
  }, {
    title: 'About',
    items: [
      { name: 'Blog', route: 'index' },
      { name: 'About', route: 'index' },
      { name: 'Jobs', route: 'index' },
      { name: 'Terms Of Service', route: 'index' },
      { name: 'Privacy Policy', route: 'index' },
      { name: 'Sitemap', route: 'index' },
      { name: 'Help & Support', route: 'index' },
    ]
  }, {
    title: 'Help Docs',
    items: [
      { name: 'Getting Started', route: 'index' },
      { name: 'Tutorials', route: 'index' },
      { name: 'Service Status', route: 'index' },
      { name: 'Contact Support', route: 'index' },
    ]
  }, {
    title: 'Social',
    items: [
      { name: 'Youtube', route: 'index' },
      { name: 'Twitter', route: 'index' },
      { name: 'Facebook', route: 'index' },
    ]
  }]
});
