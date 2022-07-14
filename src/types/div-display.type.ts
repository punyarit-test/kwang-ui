export interface FlexLayout {
  ['column']?: boolean;
  ['row']?: boolean;
  ['inline']?: boolean;
}

export interface JustifyAttr {
  ['justify-start']?: boolean;
  ['justify-center']?: boolean;
  ['justify-end']?: boolean;
  ['justify-stretch']?: boolean;
}

export interface ItemsAttr {
  ['items-start']?: boolean;
  ['items-center']?: boolean;
  ['items-end']?: boolean;
  ['items-stretch']?: boolean;
}

export interface RowGap {
  ['row-0']?: boolean;
  ['row-1']?: boolean;
  ['row-2']?: boolean;
  ['row-3']?: boolean;
  ['row-4']?: boolean;
  ['row-5']?: boolean;
  ['row-6']?: boolean;
  ['row-7']?: boolean;
  ['row-8']?: boolean;
  ['row-9']?: boolean;
  ['row-10']?: boolean;
  ['row-11']?: boolean;
  ['row-12']?: boolean;
  ['row-13']?: boolean;
  ['row-14']?: boolean;
  ['row-15']?: boolean;
  ['row-16']?: boolean;
  ['row-17']?: boolean;
  ['row-18']?: boolean;
  ['row-19']?: boolean;
  ['row-20']?: boolean;
  ['row-21']?: boolean;
  ['row-22']?: boolean;
  ['row-23']?: boolean;
  ['row-24']?: boolean;
  ['row-25']?: boolean;
  ['row-26']?: boolean;
  ['row-27']?: boolean;
  ['row-28']?: boolean;
  ['row-29']?: boolean;
  ['row-30']?: boolean;
  ['row-31']?: boolean;
  ['row-32']?: boolean;
  ['row-33']?: boolean;
  ['row-34']?: boolean;
  ['row-35']?: boolean;
  ['row-36']?: boolean;
  ['row-37']?: boolean;
  ['row-38']?: boolean;
  ['row-39']?: boolean;
  ['row-40']?: boolean;
  ['row-42']?: boolean;
  ['row-44']?: boolean;
  ['row-46']?: boolean;
  ['row-48']?: boolean;
  ['row-50']?: boolean;
  ['row-52']?: boolean;
  ['row-54']?: boolean;
  ['row-56']?: boolean;
  ['row-58']?: boolean;
  ['row-60']?: boolean;
  ['row-62']?: boolean;
  ['row-64']?: boolean;
  ['row-66']?: boolean;
  ['row-68']?: boolean;
  ['row-70']?: boolean;
  ['row-72']?: boolean;
  ['row-74']?: boolean;
  ['row-78']?: boolean;
  ['row-80']?: boolean;
  ['row-82']?: boolean;
  ['row-84']?: boolean;
  ['row-86']?: boolean;
  ['row-88']?: boolean;
  ['row-90']?: boolean;
  ['row-92']?: boolean;
  ['row-94']?: boolean;
  ['row-96']?: boolean;
  ['row-98']?: boolean;
  ['row-100']?: boolean;
  ['row-102']?: boolean;
  ['row-104']?: boolean;
  ['row-106']?: boolean;
  ['row-108']?: boolean;
  ['row-110']?: boolean;
  ['row-112']?: boolean;
  ['row-116']?: boolean;
  ['row-118']?: boolean;
  ['row-120']?: boolean;
  ['row-124']?: boolean;
}

export interface ColGap {
  ['col-0']?: boolean;
  ['col-1']?: boolean;
  ['col-2']?: boolean;
  ['col-3']?: boolean;
  ['col-4']?: boolean;
  ['col-5']?: boolean;
  ['col-6']?: boolean;
  ['col-7']?: boolean;
  ['col-8']?: boolean;
  ['col-9']?: boolean;
  ['col-10']?: boolean;
  ['col-11']?: boolean;
  ['col-12']?: boolean;
  ['col-13']?: boolean;
  ['col-14']?: boolean;
  ['col-15']?: boolean;
  ['col-16']?: boolean;
  ['col-17']?: boolean;
  ['col-18']?: boolean;
  ['col-19']?: boolean;
  ['col-20']?: boolean;
  ['col-21']?: boolean;
  ['col-22']?: boolean;
  ['col-23']?: boolean;
  ['col-24']?: boolean;
  ['col-25']?: boolean;
  ['col-26']?: boolean;
  ['col-27']?: boolean;
  ['col-28']?: boolean;
  ['col-29']?: boolean;
  ['col-30']?: boolean;
  ['col-31']?: boolean;
  ['col-32']?: boolean;
  ['col-33']?: boolean;
  ['col-34']?: boolean;
  ['col-35']?: boolean;
  ['col-36']?: boolean;
  ['col-37']?: boolean;
  ['col-38']?: boolean;
  ['col-39']?: boolean;
  ['col-40']?: boolean;
  ['col-42']?: boolean;
  ['col-44']?: boolean;
  ['col-46']?: boolean;
  ['col-48']?: boolean;
  ['col-50']?: boolean;
  ['col-52']?: boolean;
  ['col-54']?: boolean;
  ['col-56']?: boolean;
  ['col-58']?: boolean;
  ['col-60']?: boolean;
  ['col-62']?: boolean;
  ['col-64']?: boolean;
  ['col-66']?: boolean;
  ['col-68']?: boolean;
  ['col-70']?: boolean;
  ['col-72']?: boolean;
  ['col-74']?: boolean;
  ['col-78']?: boolean;
  ['col-80']?: boolean;
  ['col-82']?: boolean;
  ['col-84']?: boolean;
  ['col-86']?: boolean;
  ['col-88']?: boolean;
  ['col-90']?: boolean;
  ['col-92']?: boolean;
  ['col-94']?: boolean;
  ['col-96']?: boolean;
  ['col-98']?: boolean;
  ['col-100']?: boolean;
  ['col-102']?: boolean;
  ['col-104']?: boolean;
  ['col-106']?: boolean;
  ['col-108']?: boolean;
  ['col-110']?: boolean;
  ['col-112']?: boolean;
  ['col-116']?: boolean;
  ['col-118']?: boolean;
  ['col-120']?: boolean;
  ['col-124']?: boolean;
}

export interface FlexGrowAttr {
  ['grow-0']?: boolean;
  ['grow']?: boolean;
}

export interface FlexWrap {
  ['wrap']?: boolean;
  ['wrap-reverse']?: boolean;
  ['nowrap']?: boolean;
}
export interface FlexAttr
  extends JustifyAttr,
    FlexLayout,
    JustifyAttr,
    ItemsAttr,
    ColGap,
    RowGap,
    FlexGrowAttr,
    FlexWrap {}
