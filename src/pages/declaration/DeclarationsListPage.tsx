import {
  Table,
  Tag,
  Button,
  Typography,
  Space,
  DatePicker,
  Input,
  Card,
  Row,
  Col,
  Statistic,
} from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
// import type { SorterResult } from "antd/es/table/interface";
import {
  PlayCircleOutlined,
  MailOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import "./Declaration.css";

import {
  declarationService,
  type DeclarationResponse,
} from "../../service/declarationService";
import { useAuth } from "../../context/AuthContext";
import { useDeclaration } from "../../context/DeclarationContext";

const { Title, Text } = Typography;
const { RangePicker } = DatePicker;

const DeclarationsListPage = () => {
  const navigate = useNavigate();

  const [data, setData] = useState<DeclarationResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const { triggeringStatus, startTriggering, stopTriggering } = useAuth();

  const [triggerLoading, setTriggerLoading] = useState(false);
  const { setFilesId } = useDeclaration();

  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const [filters, setFilters] = useState({
    type: "",
    name: "",
    dateRange: null as [Dayjs, Dayjs] | null,
  });

  // const [sorter, setSorter] = useState<SorterResult<DeclarationResponse>>({});

  const intervalRef = useRef<any | null>(null);

  const fetchDeclarations = async () => {
    setLoading(true);
    try {
      const res : any = await declarationService.getDeclarations({
        // type: filters.type || undefined,
        referenceNo: filters.name || undefined,
        fromDate: filters.dateRange?.[0]?.format("YYYY-MM-DD"),
        toDate: filters.dateRange?.[1]?.format("YYYY-MM-DD"),
        // sortBy: sorter.field as string,
        // sortOrder:
        //   sorter.order === "ascend"
        //     ? "asc"
        //     : sorter.order === "descend"
        //       ? "desc"
        //       : undefined,
      });

      setData(res.data || res);
      setPagination((prev) => ({
        ...prev,
        total: res.total || 0,
      }));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDeclarations();
  }, [pagination.current, pagination.pageSize, filters]);

  // const handleTableChange = (
  //   newPagination: TablePaginationConfig,
  //   _: any,
  //   newSorter: SorterResult<DeclarationResponse>,
  // ) => {
  //   setPagination(newPagination);
  //   setSorter(newSorter);
  // };

  const startPolling = () => {
    if (intervalRef.current) return; // tránh tạo nhiều interval

    intervalRef.current = setInterval(() => {
      fetchDeclarations();
    }, 60000); // 60 giây
  };

  const stopPolling = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleTriggerClick = async () => {
    setTriggerLoading(true);

    try {
      if (triggeringStatus) {
        await stopTriggering();
        stopPolling();
      } else {
        await startTriggering();
        fetchDeclarations();
        startPolling();
      }
    } catch (error) {
      console.error("Trigger error:", error);
    } finally {
      setTriggerLoading(false);
    }
  };

  useEffect(() => {
    if (triggeringStatus) {
      startPolling();
    } else {
      stopPolling();
    }

    return () => stopPolling(); // cleanup khi unmount
  }, [triggeringStatus]);

  const columns: ColumnsType<DeclarationResponse> = [
    {
      title: "STT",
      render: (_, __, index) =>
        ((pagination.current || 1) - 1) * (pagination.pageSize || 10) +
        index +
        1,
      width: 70,
    },
    {
      title: "Email nguồn",
      dataIndex: "source_email",
      render: (value: string) => value || "-",
    },
    {
      title: "Ngày tiếp nhận",
      dataIndex: "created_at",
      render: (date: string) =>
        date ? dayjs(date).format("DD/MM/YYYY HH:mm") : "-",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      render: (status: string) => {
        let color = "orange";
        let text = "Đang xử lý";

        if (status === "PROCESSING") {
          color = "orange";
          text = "Đang xử lý";
        } else if (status === "SUCCESS") {
          color = "green";
          text = "Hoàn thành";
        } else if (status === "FAIL") {
          color = "red";
          text = "Lỗi";
        }

        return <Tag color={color}>{text}</Tag>;
      },
    },
    {
      title: "Thao tác",
      render: (_, record) => (
        <Button
          size="small"
          onClick={() => {
            setFilesId(record.files_id); 
            navigate(`/declarations/${record.declaration_id}`);
          }}
        >
          Xem chi tiết
        </Button>
      ),
    },
  ];

  return (
    <div style={{ padding: 16 }}>
      {/* START AI CARD */}
      <Card
        style={{
          // marginTop: ,
          borderRadius: 16,
          textAlign: "center",
        }}
      >
        <Title level={4}>Sẵn sàng xử lý lô mới?</Title>
        <Text type="secondary">
          Nhấn bên dưới để khởi động AI và tự động xử lý email tờ khai.
        </Text>

        <div style={{ marginTop: 20 }}>
          <Button
            size="large"
            icon={triggeringStatus ? <StopOutlined /> : <PlayCircleOutlined />}
            className={`ai-trigger-btn ${triggeringStatus ? "stop" : "start"}`}
            loading={triggerLoading}
            onClick={handleTriggerClick}
          >
            {triggeringStatus ? "STOP AI AUTOMATION" : "START AI AUTOMATION"}
          </Button>
        </div>
      </Card>

      {/* STATISTICS */}
      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col span={8}>
          <Card>
            <Statistic
              title="Email đã scan"
              value={124}
              prefix={<MailOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Số file đã xử lý"
              value={42}
              prefix={<CheckCircleOutlined />}
              valueStyle={{ color: "#8ec300" }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Cần kiểm tra thủ công"
              value={7}
              prefix={<ExclamationCircleOutlined />}
              valueStyle={{ color: "#faad14" }}
            />
          </Card>
        </Col>
      </Row>

      {/* FILTER + TABLE */}
      <Card style={{ marginTop: 24, borderRadius: 16 }}>
        <Space style={{ marginBottom: 16 }} wrap>
          {/* <Select
            placeholder="Loại hình"
            allowClear
            style={{ width: 150 }}
            options={[
              { label: "Nhập khẩu", value: "IMPORT" },
              { label: "Xuất khẩu", value: "EXPORT" },
            ]}
            onChange={(value) =>
              setFilters((prev) => ({
                ...prev,
                type: value,
              }))
            }
          /> */}

          <Input
            placeholder="Email nguồn"
            style={{ width: 250 }}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
          />

          <RangePicker
            onChange={(value) =>
              setFilters((prev) => ({
                ...prev,
                dateRange: value as any,
              }))
            }
          />
        </Space>

        <Table
          rowKey="id"
          columns={columns}
          dataSource={data}
          loading={loading}
          pagination={pagination}
          // onChange={handleTableChange}
        />
      </Card>
    </div>
  );
};

export default DeclarationsListPage;
