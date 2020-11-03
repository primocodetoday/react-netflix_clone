export interface AccordionContexType {
  toggleShow: boolean;
  setToggleShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface AccordionComposition {
  Title: React.FC<{ children: string }>;
  Item: React.FC<{ children: React.ReactNode }>;
  Header: React.FC<HeaderProps>;
  Body: React.FC<{ children: React.ReactNode }>;
  Span: React.FC<{ children: string }>;
}

export type ComponentProps = {
  children: React.ReactNode;
};

export type HeaderProps = {
  children: string;
};
