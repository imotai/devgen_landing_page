export function timeDifference(current: number, previous: number) {
  const sPerMinute = 60;
  const sPerHour = sPerMinute * 60;
  const sPerDay = sPerHour * 24;
  const sPerMonth = sPerDay * 30;
  const sPerYear = sPerDay * 365;
  const elapsed = current - previous;
  if (elapsed < sPerMinute) {
    return Math.round(elapsed) + " seconds ago";
  } else if (elapsed < sPerHour) {
    return Math.round(elapsed / sPerMinute) + " minutes ago";
  } else if (elapsed < sPerDay) {
    return Math.round(elapsed / sPerHour) + " hours ago";
  } else if (elapsed < sPerMonth) {
    return Math.round(elapsed / sPerDay) + " days ago";
  } else if (elapsed < sPerYear) {
    return Math.round(elapsed / sPerMonth) + " months ago";
  } else {
    return Math.round(elapsed / sPerYear) + " years ago";
  }
}
export function openSidebar() {
  if (typeof document !== "undefined") {
    document.body.style.overflow = "hidden";
    document.documentElement.style.setProperty("--SideNavigation-slideIn", "1");
  }
}

export function closeSidebar() {
  if (typeof document !== "undefined") {
    document.documentElement.style.removeProperty("--SideNavigation-slideIn");
    document.body.style.removeProperty("overflow");
  }
}

export function toggleSidebar() {
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    const slideIn = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--SideNavigation-slideIn");
    if (slideIn) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }
}

export function openMessagesPane() {
  if (typeof document !== "undefined") {
    document.body.style.overflow = "hidden";
    document.documentElement.style.setProperty("--MessagesPane-slideIn", "1");
  }
}

export function closeMessagesPane() {
  if (typeof document !== "undefined") {
    document.documentElement.style.removeProperty("--MessagesPane-slideIn");
    document.body.style.removeProperty("overflow");
  }
}

export function toggleMessagesPane() {
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    const slideIn = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--MessagesPane-slideIn");
    if (slideIn) {
      closeMessagesPane();
    } else {
      openMessagesPane();
    }
  }
}
