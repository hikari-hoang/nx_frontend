import { Card, Button, Table, Input, InputNumber } from "antd";
import { useFormContext, useFieldArray, Controller } from "react-hook-form";
import { useEffect } from "react";

export default function GoodsListSection() {
  const { control, watch, setValue, register } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "goods",
  });

  const goodsWatch = watch("goods");

  // ===== Auto tính trị giá =====
  useEffect(() => {
    goodsWatch?.forEach((item: any, index: number) => {
      const total = (item?.quantity || 0) * (item?.unitPrice || 0);
      setValue(`goods.${index}.totalValue`, total);
    });
  }, [goodsWatch, setValue]);

  const columns = [
    {
      title: "STT",
      width: 60,
      render: (_: any, __: any, index: number) => index + 1,
    },
    {
      title: "Tên hàng (mô tả chi tiết)",
      width: 250,
      render: (_: any, __: any, index: number) => (
        <Input
          size="small"
          {...register(`goods.${index}.description`)}
        />
      ),
    },
    {
      title: "Mã HS",
      width: 120,
      render: (_: any, __: any, index: number) => (
        <Input
          size="small"
          {...register(`goods.${index}.hsCode`)}
        />
      ),
    },
    {
      title: "Xuất xứ",
      width: 120,
      render: (_: any, __: any, index: number) => (
        <Input
          size="small"
          {...register(`goods.${index}.originCountry`)}
        />
      ),
    },
    {
      title: "Lượng",
      width: 100,
      render: (_: any, __: any, index: number) => (
        <Controller
          control={control}
          name={`goods.${index}.quantity`}
          render={({ field }) => (
            <InputNumber size="small" style={{ width: "100%" }} {...field} />
          )}
        />
      ),
    },
    {
      title: "Đơn vị",
      width: 90,
      render: (_: any, __: any, index: number) => (
        <Input
          size="small"
          {...register(`goods.${index}.unit`)}
        />
      ),
    },
    {
      title: "Đơn giá hóa đơn",
      width: 150,
      render: (_: any, __: any, index: number) => (
        <Controller
          control={control}
          name={`goods.${index}.unitPrice`}
          render={({ field }) => (
            <InputNumber size="small" style={{ width: "100%" }} {...field} />
          )}
        />
      ),
    },
    {
      title: "Trị giá hóa đơn",
      width: 150,
      render: (_: any, __: any, index: number) => (
        <Controller
          control={control}
          name={`goods.${index}.totalValue`}
          render={({ field }) => (
            <InputNumber
              size="small"
              style={{ width: "100%" }}
              {...field}
              disabled
            />
          )}
        />
      ),
    },
    {
      title: "",
      width: 80,
      render: (_: any, __: any, index: number) => (
        <Button danger size="small" onClick={() => remove(index)}>
          Xóa
        </Button>
      ),
    },
  ];

  return (
    <Card
      title="Danh sách hàng"
      style={{ marginBottom: 24 }}
      extra={
        <Button
          type="primary"
          onClick={() =>
            append({
              description: "",
              hsCode: "",
              originCountry: "",
              quantity: 0,
              unit: "",
              unitPrice: 0,
              totalValue: 0,
            })
          }
        >
          + Thêm hàng
        </Button>
      }
    >
      <Table
        dataSource={fields}
        columns={columns}
        rowKey="id"
        pagination={false}
        scroll={{ x: 1400 }}
        size="small"
      />
    </Card>
  );
}