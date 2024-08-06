import { Buffer } from 'buffer'
export function timeDifference(current: number, previous: number) {
    const sPerMinute = 60
    const sPerHour = sPerMinute * 60
    const sPerDay = sPerHour * 24
    const sPerMonth = sPerDay * 30
    const sPerYear = sPerDay * 365
    const elapsed = current - previous
    if (elapsed < sPerMinute) {
        return Math.round(elapsed) + ' seconds ago'
    } else if (elapsed < sPerHour) {
        return Math.round(elapsed / sPerMinute) + ' minutes ago'
    } else if (elapsed < sPerDay) {
        return Math.round(elapsed / sPerHour) + ' hours ago'
    } else if (elapsed < sPerMonth) {
        return Math.round(elapsed / sPerDay) + ' days ago'
    } else if (elapsed < sPerYear) {
        return Math.round(elapsed / sPerMonth) + ' months ago'
    } else {
        return Math.round(elapsed / sPerYear) + ' years ago'
    }
}
export function openSidebar() {
    if (typeof document !== 'undefined') {
        document.body.style.overflow = 'hidden'
        document.documentElement.style.setProperty(
            '--SideNavigation-slideIn',
            '1'
        )
    }
}

export function closeSidebar() {
    if (typeof document !== 'undefined') {
        document.documentElement.style.removeProperty(
            '--SideNavigation-slideIn'
        )
        document.body.style.removeProperty('overflow')
    }
}

export function toggleSidebar() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const slideIn = window
            .getComputedStyle(document.documentElement)
            .getPropertyValue('--SideNavigation-slideIn')
        if (slideIn) {
            closeSidebar()
        } else {
            openSidebar()
        }
    }
}

export function openMessagesPane() {
    if (typeof document !== 'undefined') {
        document.body.style.overflow = 'hidden'
        document.documentElement.style.setProperty(
            '--MessagesPane-slideIn',
            '1'
        )
    }
}

export function closeMessagesPane() {
    if (typeof document !== 'undefined') {
        document.documentElement.style.removeProperty('--MessagesPane-slideIn')
        document.body.style.removeProperty('overflow')
    }
}

export function toggleMessagesPane() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const slideIn = window
            .getComputedStyle(document.documentElement)
            .getPropertyValue('--MessagesPane-slideIn')
        if (slideIn) {
            closeMessagesPane()
        } else {
            openMessagesPane()
        }
    }
}
export const savePlainToStorage = (key: string, value: any) => {
    window.localStorage.setItem(key, value.toString())
}
export const getPlainFromStorage = (key: string) => {
    return window.localStorage.getItem(key)
}
export const removePlainFromStorage = (key: string) => {
    window.localStorage.removeItem(key)
}

export const popupCenter = ({
    url,
    title,
    w,
    h,
}: {
    url: string
    title: string
    w: number
    h: number
}) => {
    // Fixes dual-screen position       Most browsers      Firefox
    const dualScreenLeft =
        window.screenLeft !== undefined ? window.screenLeft : window.screenX
    const dualScreenTop =
        window.screenTop !== undefined ? window.screenTop : window.screenY

    const width = window.innerWidth
        ? window.innerWidth
        : document.documentElement.clientWidth
        ? document.documentElement.clientWidth
        : screen.width
    const height = window.innerHeight
        ? window.innerHeight
        : document.documentElement.clientHeight
        ? document.documentElement.clientHeight
        : screen.height

    const systemZoom = width / window.screen.availWidth
    const left = (width - w) / 2 / systemZoom + dualScreenLeft
    const top = (height - h) / 2 / systemZoom + dualScreenTop
    const newWindow = window.open(
        url,
        title,
        `
      scrollbars=yes,
      width=${w / systemZoom}, 
      height=${h / systemZoom}, 
      top=${top}, 
      left=${left}
      `
    )
    return newWindow
}
function unescape(str: string) {
    return (str + '==='.slice((str.length + 3) % 4))
        .replace(/-/g, '+')
        .replace(/_/g, '/')
}

function escape(str: string) {
    return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

export function base64UrlEncode(str: string) {
    return escape(Buffer.from(str, 'utf8').toString('base64'))
}

export function base64UrlDecode(str: string) {
    return Buffer.from(unescape(str), 'base64').toString('utf8')
}
