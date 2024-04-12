export const Number = (props) => (
  <p className="rounded-md border-[1px] border-secondary px-2 py-1 text-center lg:w-[60px]">
    {props.children}
  </p>
);

export const Description = (props) => (
  <p className="rounded-md border-[1px] border-secondary px-2 py-1 text-left lg:w-2/3">
    {props.children}
  </p>
);

export const Date = (props) => (
  <p
    onClick={props?.onClick}
    className="cursor-pointer rounded-md border-[1px] border-secondary px-2 py-1 text-center lg:w-[200px]"
  >
    {props.children}
  </p>
);

export const Fund = (props) => (
  <p className="rounded-md border-[1px] border-secondary px-2 py-1 text-left lg:w-[200px]">
    {props.children}
  </p>
);
