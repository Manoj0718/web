export { default as AboutComponent } from '../..\\components\\AboutComponent.vue'
export { default as ContactComponent } from '../..\\components\\ContactComponent.vue'
export { default as ContactForm } from '../..\\components\\ContactForm.vue'
export { default as LetConnectAnime } from '../..\\components\\LetConnectAnime.vue'
export { default as MainHeader } from '../..\\components\\MainHeader.vue'
export { default as MySkillComponenet } from '../..\\components\\MySkillComponenet.vue'
export { default as ParticelsComponennt } from '../..\\components\\ParticelsComponennt.vue'
export { default as SideBar } from '../..\\components\\SideBar.vue'
export { default as SocialMedia } from '../..\\components\\SocialMedia.vue'
export { default as SocialMediaContact } from '../..\\components\\SocialMediaContact.vue'
export { default as TextSide } from '../..\\components\\textSide.vue'
export { default as UsedTechComponent } from '../..\\components\\UsedTechComponent.vue'

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
