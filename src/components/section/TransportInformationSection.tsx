import { Card, Row, Col, Input, DatePicker, Form } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs from "dayjs";

const transportFields = [
  [
    {
      span: 8,
      label: "Mã hiệu phương thức vận chuyển",
      name: "KhaiToKhai.Ma_hieu_phuong_thuc_van_chuyen",
      type: "input",
    },
    {
      span: 8,
      label: "Mã phương tiện vận chuyển",
      name: "KhaiToKhai.Ma_phuong_tien_van_chuyen",
      type: "input",
    },
    {
      span: 8,
      label: "Tên phương tiện vận chuyển",
      name: "KhaiToKhai.Ten_phuong_tien_van_chuyen",
      type: "input",
    },
  ],
  [
    {
      span: 8,
      label: "Ngày khởi hành vận chuyển",
      name: "KhaiToKhai.Ngay_khoi_hanh_van_chuyen",
      type: "date",
    },
    {
      span: 8,
      label: "Ngày đến",
      name: "KhaiToKhai.Ngay_den",
      type: "date",
    },
    {
      span: 8,
      label: "Ngày dự kiến đến địa điểm đích",
      name: "KhaiToKhai.Ngay_du_kien_den_dia_diem_dich",
      type: "date",
    },
  ],
  [
    {
      span: 12,
      label: "Địa điểm đích cho vận chuyển bảo thuế",
      name: "KhaiToKhai.Dia_diem_dich_cho_van_chuyen_bao_thue",
      type: "input",
    },
    {
      span: 12,
      label: "Vận đơn",
      name: "KhaiToKhai.Van_don",
      type: "input",
    },
  ],
  [
    {
      span: 8,
      label: "Số lượng kiện",
      name: "KhaiToKhai.So_luong_kien",
      type: "input",
    },
    {
      span: 8,
      label: "Loại kiện",
      name: "KhaiToKhai.Loai_kien",
      type: "input",
    },
    {
      span: 8,
      label: "Số lượng cont",
      name: "KhaiToKhai.So_luong_cont",
      type: "input",
    },
  ],
  [
    {
      span: 12,
      label: "Tổng trọng lượng hàng (Gross)",
      name: "KhaiToKhai.Tong_trong_luong_hang_Gross",
      type: "input",
    },
    {
      span: 12,
      label: "Đơn vị tính trọng lượng",
      name: "KhaiToKhai.Don_vi_tinh_trong_luong",
      type: "input",
    },
  ],
];

export default function TransportInformationSection() {
  const { control } = useFormContext();

  const renderField = (item: any, field: any) => {
    if (item.type === "date") {
      return (
        <DatePicker
          style={{ width: "100%" }}
          format="DD/MM/YYYY"
          value={field.value ? dayjs(field.value) : null}
          onChange={(date) =>
            field.onChange(date ? date.toISOString() : null)
          }
        />
      );
    }

    return <Input {...field} />;
  };

  return (
    <Card title="Thông tin vận chuyển" className="mb-6">
      <Form layout="vertical">
        {transportFields.map((row, rowIndex) => (
          <Row key={rowIndex} gutter={[24, 20]}>
            {row.map((item) => (
              <Col key={item.name} span={item.span}>
                <Form.Item label={item.label}>
                  <Controller
                    name={item.name}
                    control={control}
                    render={({ field }) => renderField(item, field)}
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