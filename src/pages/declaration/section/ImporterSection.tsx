import { Card, Row, Col, Input, Form, Divider } from "antd";
import { Controller, useFormContext } from "react-hook-form";

export default function ImporterSection() {
  const { control } = useFormContext();

  return (
    <Card title="Đơn vị xuất nhập khẩu" className="mb-6">
      <Form layout="vertical">

        {/* ================= NGƯỜI XUẤT KHẨU ================= */}
        <Divider orientation="left">Người xuất khẩu</Divider>

        <Row gutter={[24, 20]}>
          <Col span={6}>
            <Form.Item label="Mã">
              <Controller
                name="parties.exporter.code"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>

          <Col span={18}>
            <Form.Item label="Tên">
              <Controller
                name="parties.exporter.name"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[24, 20]}>
          <Col span={6}>
            <Form.Item label="Mã bưu chính">
              <Controller
                name="parties.exporter.postalCode"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Địa chỉ">
              <Controller
                name="parties.exporter.address"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Điện thoại">
              <Controller
                name="parties.exporter.phone"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>
        </Row>

        {/* ================= NGƯỜI ỦY THÁC XUẤT KHẨU ================= */}
        <Divider orientation="left">Người ủy thác xuất khẩu</Divider>

        <Row gutter={[24, 20]}>
          <Col span={6}>
            <Form.Item label="Mã">
              <Controller
                name="parties.exportEntrusted.code"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>

          <Col span={18}>
            <Form.Item label="Tên">
              <Controller
                name="parties.exportEntrusted.name"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>
        </Row>

        {/* ================= NGƯỜI NHẬP KHẨU ================= */}
        <Divider orientation="left">Người nhập khẩu</Divider>

        <Row gutter={[24, 20]}>
          <Col span={6}>
            <Form.Item label="Mã">
              <Controller
                name="parties.importer.code"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>

          <Col span={18}>
            <Form.Item label="Tên">
              <Controller
                name="parties.importer.name"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[24, 20]}>
          <Col span={6}>
            <Form.Item label="Mã bưu chính">
              <Controller
                name="parties.importer.postalCode"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Địa chỉ">
              <Controller
                name="parties.importer.address"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Mã nước">
              <Controller
                name="parties.importer.countryCode"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>
        </Row>

      </Form>
    </Card>
  );
}