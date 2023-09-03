export const AboutComponent = () => import('../..\\components\\AboutComponent.vue' /* webpackChunkName: "components/about-component" */).then(c => wrapFunctional(c.default || c))
export const ContactComponent = () => import('../..\\components\\ContactComponent.vue' /* webpackChunkName: "components/contact-component" */).then(c => wrapFunctional(c.default || c))
export const ContactForm = () => import('../..\\components\\ContactForm.vue' /* webpackChunkName: "components/contact-form" */).then(c => wrapFunctional(c.default || c))
export const LetConnectAnime = () => import('../..\\components\\LetConnectAnime.vue' /* webpackChunkName: "components/let-connect-anime" */).then(c => wrapFunctional(c.default || c))
export const Logoheader = () => import('../..\\components\\Logoheader.vue' /* webpackChunkName: "components/logoheader" */).then(c => wrapFunctional(c.default || c))
export const MainHeader = () => import('../..\\components\\MainHeader.vue' /* webpackChunkName: "components/main-header" */).then(c => wrapFunctional(c.default || c))
export const MobileMenu = () => import('../..\\components\\MobileMenu.vue' /* webpackChunkName: "components/mobile-menu" */).then(c => wrapFunctional(c.default || c))
export const MySkillComponenet = () => import('../..\\components\\MySkillComponenet.vue' /* webpackChunkName: "components/my-skill-componenet" */).then(c => wrapFunctional(c.default || c))
export const NavbarLinks = () => import('../..\\components\\NavbarLinks.vue' /* webpackChunkName: "components/navbar-links" */).then(c => wrapFunctional(c.default || c))
export const ParticelsComponennt = () => import('../..\\components\\ParticelsComponennt.vue' /* webpackChunkName: "components/particels-componennt" */).then(c => wrapFunctional(c.default || c))
export const SideBar = () => import('../..\\components\\SideBar.vue' /* webpackChunkName: "components/side-bar" */).then(c => wrapFunctional(c.default || c))
export const SocialMedia = () => import('../..\\components\\SocialMedia.vue' /* webpackChunkName: "components/social-media" */).then(c => wrapFunctional(c.default || c))
export const SocialMediaContact = () => import('../..\\components\\SocialMediaContact.vue' /* webpackChunkName: "components/social-media-contact" */).then(c => wrapFunctional(c.default || c))
export const TextSide = () => import('../..\\components\\text-Side.vue' /* webpackChunkName: "components/text-side" */).then(c => wrapFunctional(c.default || c))
export const UsedTechComponent = () => import('../..\\components\\UsedTechComponent.vue' /* webpackChunkName: "components/used-tech-component" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
