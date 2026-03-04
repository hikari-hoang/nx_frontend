import { Card, Row, Col, Input, Form } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const locationFields = [
  [
    {
      span: 12,
      label: "Mã địa điểm lưu kho",
      name: "KhaiToKhai.Ma_dia_diem_luu_kho",
    },
    {
      span: 12,
      label: "Tên địa điểm lưu kho",
      name: "KhaiToKhai.Ten_dia_diem_luu_kho",
    },
  ],
  [
    {
      span: 12,
      label: "Mã địa điểm xếp hàng",
      name: "KhaiToKhai.Ma_dia_diem_xep_hang",
    },
    {
      span: 12,
      label: "Tên địa điểm xếp hàng",
      name: "KhaiToKhai.Ten_dia_diem_xep_hang",
    },
  ],
  [
    {
      span: 12,
      label: "Mã địa điểm dỡ hàng",
      name: "KhaiToKhai.Ma_dia_diem_do_hang",
    },
    {
      span: 12,
      label: "Tên địa điểm dỡ hàng",
      name: "KhaiToKhai.Ten_dia_diem_do_hang",
    },
  ],
];

export default function LocationSection() {
  const { control } = useFormContext();

  return (
    <Card title="Địa điểm xếp dỡ & lưu kho" className="mb-6">
      <Form layout="vertical">
        {locationFields.map((row, rowIndex) => (
          <Row key={rowIndex} gutter={[24, 20]}>
            {row.map((item) => (
              <Col key={item.name} span={item.span}>
                <Form.Item label={item.label}>
                  <Controller
                    name={item.name}
                    control={control}
                    render={({ field }) => <Input {...field} />}
                  />
                </Form.Item>
              </Col>
            ))}
          </Row>
        ))}
      </Form>
    </Card>
  );
}