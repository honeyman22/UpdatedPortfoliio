import classNames from "classnames";
interface CommonInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errors: any;
  register: any;
  id: string;
  className?: string;
  tooltip?: boolean;
  tooltipTitle?: string;
  inputType?: string;
  optional?: boolean;
}

const CustomInput = ({
  errors,
  id,
  register,
  className,
  // tooltip,
  // tooltipTitle,
  // optional,
  ...others
}: CommonInputProps) => {
  return (
    <div className="common-input-wrapper">
      <input
        id={id}
        name={id}
        className={classNames(
          "common-input w-full h-11  outline-none border text-black px-2 text-sm  mt-2 mb-1.5 rounded-lg ",
          className
        )}
        {...register(id)}
        {...others}
      />
      {errors[`${id}`] && (
        <p className="input-error-text text-bluesh text-xs leading-5 text-red-500">
          {errors[`${id}`].message}
        </p>
      )}
    </div>
  );
};

export default CustomInput;
