import { Card, Row, Col, Input, DatePicker, Radio, Form } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs from "dayjs";

export default function DeclarationSection() {
  const { control } = useFormContext();

  return (
    <Card title="Nhóm loại hình" className="mb-6">
      <Form layout="vertical">
        {/* HÀNG 1 - Nhóm loại hình + Số tờ khai + STT */}
        <Row gutter={[24, 20]}>
          <Col span={14}>
            <Form.Item label="Nhóm loại hình">
              <Controller
                name="documentInfo.documentType"
                control={control}
                render={({ field }) => (
                  <Radio.Group {...field}>
                    <Radio value="KD">Kinh doanh</Radio>
                    <Radio value="SXXK">Sản xuất xuất khẩu</Radio>
                    <Radio value="GC">Gia công</Radio>
                    <Radio value="CX">Chế xuất</Radio>
                    <Radio value="KHAC">Khác</Radio>
                  </Radio.Group>
                )}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Số tờ khai">
              <Controller
                name="documentInfo.declarationNumber"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="STT">
              <Controller
                name="documentInfo.sequenceNumber"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>
        </Row>

        {/* HÀNG 2 */}
        <Row gutter={[24, 20]}>
          <Col span={6}>
            <Form.Item label="Số nhánh">
              <Controller
                name="documentInfo.branchNumber"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>

          <Col span={10}>
            <Form.Item label="Số tờ khai tạm nhập tái xuất tương ứng">
              <Controller
                name="documentInfo.relatedTemporaryDeclarationNumber"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label="Mã loại hình">
              <Controller
                name="documentInfo.documentCode"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>
        </Row>

        {/* HÀNG 3 */}
        <Row gutter={[24, 20]}>
          <Col span={8}>
            <Form.Item label="Cơ quan Hải quan">
              <Controller
                name="customsInfo.customsOfficeCode"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label="Mã bộ phận xử lý tờ khai">
              <Controller
                name="customsInfo.processingUnitCode"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label="Mã phân loại hàng hóa">
              <Controller
                name="customsInfo.goodsClassificationCode"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>
        </Row>

        {/* HÀNG 4 */}
        <Row gutter={[24, 20]}>
          <Col span={8}>
            <Form.Item label="Thời hạn nộp thuế">
              <Controller
                name="taxInfo.taxPaymentDeadline"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label="Ngày khai báo (dự kiến)">
              <Controller
                name="documentInfo.declarationDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    style={{ width: "100%" }}
                    value={field.value ? dayjs(field.value) : null}
                    onChange={(date) =>
                      field.onChange(date ? date.toISOString() : null)
                    }
                  />
                )}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}