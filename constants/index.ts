export const navLinks = [
  {
    label: "Home",
    route: "/",
    icon: "/assets/icons/home.svg",
  },
  {
    label: "Create Image",
    route: "/image/actions/create",
    icon: "/assets/icons/image.svg",
  },
  {
    label: "In Paint",
    route: "/image/actions/inpaint",
    icon: "/assets/icons/image.svg",
  },
  {
    label: "Out Paint",
    route: "/image/actions/outpaint",
    icon: "/assets/icons/stars.svg",
  },
  {
    label: "Object Remove",
    route: "/image/actions/remove",
    icon: "/assets/icons/scan.svg",
  },
  {
    label: "Object Recolor",
    route: "/image/actions/recolor",
    icon: "/assets/icons/filter.svg",
  },
  {
    label: "Object Replace",
    route: "/image/actions/replace",
    icon: "/assets/icons/filter.svg",
  },
  {
    label: "Background Remove",
    route: "/image/actions/backgroundRemove",
    icon: "/assets/icons/camera.svg",
  },
  {
    label: "Background Replace",
    route: "/image/actions/backgroundReplace",
    icon: "/assets/icons/camera.svg",
  },
  {
    label: "Profile",
    route: "/profile",
    icon: "/assets/icons/profile.svg",
  },
  {
    label: "Buy Credits",
    route: "/credits",
    icon: "/assets/icons/bag.svg",
  },
];

export const plans = [
  {
    _id: 1,
    name: "Free",
    icon: "/assets/icons/free-plan.svg",
    price: 0,
    credits: 20,
    inclusions: [
      {
        label: "20 Free Credits",
        isIncluded: true,
      },
      {
        label: "Basic Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: false,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 2,
    name: "Pro Package",
    icon: "/assets/icons/free-plan.svg",
    price: 40,
    credits: 120,
    inclusions: [
      {
        label: "120 Credits",
        isIncluded: true,
      },
      {
        label: "Full Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 3,
    name: "Premium Package",
    icon: "/assets/icons/free-plan.svg",
    price: 199,
    credits: 2000,
    inclusions: [
      {
        label: "2000 Credits",
        isIncluded: true,
      },
      {
        label: "Full Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: true,
      },
    ],
  },
];

export const imageActions = {
  create: {
    type: "create",
    title: "Create Image",
    subTitle: "Create visually stunning images generated by AI",
    config: { create: true },
    icon: "image.svg",
  },
  inpaint: {
    type: "inpaint",
    title: "In Paint",
    subTitle: "Refine images by restoring and making changes",
    config: { inpaint: true },
    icon: "image.svg",
  },
  outpaint: {
    type: "outpaint",
    title: "Out Paint",
    subTitle: "Enhance an image's dimensions using AI outpainting",
    config: { outpaint: true },
    icon: "image.svg",
  },
  remove: {
    type: "remove",
    title: "Object Remove",
    subTitle: "Identify and eliminate objects from images",
    config: {
      remove: { prompt: "", removeShadow: true, multiple: true },
    },
    icon: "scan.svg",
  },
  recolor: {
    type: "recolor",
    title: "Object Recolor",
    subTitle: "Identify and recolor objects from the image",
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
    icon: "filter.svg",
  },
  replace: {
    type: "replace",
    title: "Object Replace",
    subTitle: "Identify and eliminate objects from images",
    config: {
      remove: { prompt: "", replaceShadow: true, multiple: true },
    },
    icon: "scan.svg",
  },
  backgroundRemove: {
    type: "backgroundRemove",
    title: "Background Remove",
    subTitle: "Removes the background of the image using AI",
    config: { backgroundRemove: true },
    icon: "camera.svg",
  },
  backgroundReplace: {
    type: "backgroundReplace",
    title: "Background Replace",
    subTitle: "Replaces the background of the image using AI",
    config: { backgroundReplace: true },
    icon: "camera.svg",
  },
};

export const aspectRatioOptions = {
  "1:1": {
    aspectRatio: "1:1",
    label: "Square (1:1)",
    width: 1000,
    height: 1000,
  },
  "3:4": {
    aspectRatio: "3:4",
    label: "Standard Portrait (3:4)",
    width: 1000,
    height: 1334,
  },
  "9:16": {
    aspectRatio: "9:16",
    label: "Phone Portrait (9:16)",
    width: 1000,
    height: 1778,
  },
};

export const defaultValues = {
  title: "",
  prompt: "",
  selectPrompt: "",
  publicId: "",
  aspectRatio: "",
  originalImage: {
    imageUrl: "",
    width: 0,
    height: 0
  },
  transformedImage: {
    imageUrl: "",
    width: 0,
    height: 0,
    aspectRatio: ""
  }
};

export const urlPath = {
  create:'create',
  inpaint: 'inpaint',
  outpaint: 'outpaint',
  remove: 'erase',
  replace: 'search-and-replace',
  recolor: 'search-and-recolor',
  backgroundRemove: 'remove-background',
  backgroundReplace: 'replace-background-and-relight' 
}

export const creditFee = -1;