export const CustomXAxisTick = ({ x, y, payload }) => {
  return (
    <foreignObject x={x - 24} y={y} width={50} height={40}>
      <div className="text-[12px] text-center text-secondary-text font-medium">
        <div className="flex flex-col gap-1.5 text-center text-primary-text">
          <span className="text-preset-9">
            {payload.value.split(" ").at(0)}
          </span>
          <span className="text-preset-8 font-semibold">
            {payload.value.split(" ").at(1)}
          </span>
        </div>
      </div>
    </foreignObject>
  );
};
