import { Card, Row, Col, Input, Form } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const additionalInformationFields = [
  [
    {
      span: 8,
      label: "Số giấy phép",
      name: "So_giay_phep",
    },
    {
      span: 8,
      label: "Loại kiện",
      name: "Loai_kien",
    },
    {
      span: 8,
      label: "Mã phân loại tờ khai trị giá",
      name: "Ma_phan_loai_to_khai_tri_gia",
    },
  ],
  [
    {
      span: 12,
      label: "Địa điểm đích cho vận chuyển báo thuế",
      name: "Dia_diem_dich_cho_van_chuyen_bao_thue",
    },
    {
      span: 12,
      label: "Ghi chú",
      name: "Ghi_chu",
    },
  ],
  [
    {
      span: 12,
      label: "Địa chỉ người xuất/nhập khẩu 1",
      name: "Dia_chi_nguoi_xuat_nhap_khau1",
    },
    {
      span: 12,
      label: "Địa chỉ người xuất/nhập khẩu 2",
      name: "Dia_chi_nguoi_xuat_nhap_khau2",
    },
  ],
  [
    {
      span: 12,
      label: "Địa chỉ người xuất/nhập khẩu 3",
      name: "Dia_chi_nguoi_xuat_nhap_khau3",
    },
    {
      span: 12,
      label: "Địa chỉ người xuất/nhập khẩu 4",
      name: "Dia_chi_nguoi_xuat_nhap_khau4",
    },
  ],
];

export default function AdditionalInformationSection() {
  const { control } = useFormContext();

  return (
    <Card title="Thông tin giấy phép & bổ sung" className="mb-6">
      <Form layout="vertical">
        {additionalInformationFields.map((row, rowIndex) => (
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