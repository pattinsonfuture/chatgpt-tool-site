export const navVariants = {
  hidden: {
    opacity: 0,
    x: -50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delayChildren: 0.5,
      staggerChildren: 0.3,
      staggerDirection: 1,
    },
  },
};

export const navChildrens = {
  hidden: { opacity: 0 ,x: -50,},
  show: { opacity: 1,x: 0,},
  hover:{ 
    scale:1.2,    
  },
  tap:{
    scale:0.8,
  }
}

export const lookAtMouse = (position ,eyes) => ({
  initial: {
    left: position.x,
    top: position.y,
    // x: eyes === 'left' ? 0 : eyes === 'right' ? 0 : 0,
  },
  look:{
    translateX: (position.x-0.5)*50,
    translateY: (position.y)*50,
  },
});


export const startButtonMotion = {
  hidden: {
  },
  animate: {
    boxShadow: 'none',
    transition:{
      duration: 0.5,
      ease: "ease-out",
    }
  },
}

export const startButtonHoverSpan = {
  hidden: {
    opacity: 0,
    // height:"2px",
    transformOrigin: "bottom right",
    scaleX: 0,
    transition:{
      duration: 0.5,
      type: "ease-out",
    }
  },
  animate: {
    opacity: 1,
    transformOrigin: "bottom left",
    scaleX: 1,
    transition:{
      duration: 0.5,
      type: "ease-out",
    }
  },
}

export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = (delay) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const planetVariants = (direction) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : '100%',
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      duration: 1.8,
      delay: 0.5,
    },
  },
});

export const zoomIn = (delay, duration) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.5,
    },
  },
};
