<template>
    <button
        class="btn"
        :class="[accent, size, spinner, interactivity]">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'SButton',
    props: {
        primary: {
            type: Boolean,
            required: false,
            default: false
        },
        secondary: {
            type: Boolean,
            required: false,
            default: false
        },
        success: {
            type: Boolean,
            required: false,
            default: false
        },
        warning: {
            type: Boolean,
            required: false,
            default: false
        },
        error: {
            type: Boolean,
            required: false,
            default: false
        },
        dark: {
            type: Boolean,
            required: false,
            default: false
        },
        link: {
            type: Boolean,
            required: false,
            default: false
        },
        loading: {
            type: Boolean,
            required: false,
            default: false,
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false
        },
        sm: {
            type: Boolean,
            required: false,
            default: false,
        },
        lg: {
            type: Boolean,
            required: false,
            default: false,
        },
        block: {
            type: Boolean,
            required: false,
            default: false,
        }
    },
    computed: {
        accent () {
            return {
                'btn-primary': this.primary,
                'btn-secondary': this.secondary,
                'btn-success': this.success,
                'btn-warning': this.warning,
                'btn-error': this.error,
                'btn-dark': this.dark,
                'btn-link': this.link,
                'loading': this.loading
            }
        },
        size () {
            return {
                'btn-sm': this.sm,
                'btn-lg': this.lg,
                'btn-block': this.block
            }
        },
        spinner () {
            return {
                'loading': this.loading
            }
        },
        interactivity () {
            return {
                'disabled': this.disabled
            }
        }
    }
}
</script>