import { useFilterDataContext } from "@/context";
import React, { useMemo } from "react";
import { Drawer, Descriptions, Typography, Divider, Tag, Space } from "antd";

const { Title, Text, Paragraph } = Typography;

function formatTimeFromFraction(dayFraction?: number) {
  if (typeof dayFraction !== "number" || Number.isNaN(dayFraction)) return "-";
  const totalMinutes = Math.round(dayFraction * 24 * 60);
  const hours = Math.floor(totalMinutes / 60)
    .toString()
    .padStart(2, "0");
  const minutes = (totalMinutes % 60).toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

function formatNumber(n?: number) {
  if (typeof n !== "number" || Number.isNaN(n)) return "-";
  return new Intl.NumberFormat().format(n);
}

const DetailsDrawer: React.FC = () => {
  const { setSelectData, selectData } = useFilterDataContext();

  const properties = selectData?.properties as
    | {
        Date?: string;
        Time?: number;
        Location?: string;
        Operator?: string;
        Route?: string;
        Type?: string;
        Registration?: string;
        "cn/In"?: string;
        Aboard?: number;
        Fatalities?: number;
        Ground?: number;
        Summary?: string;
        index?: number;
        country?: string;
      }
    | undefined;

  const [lng, lat] = useMemo(() => {
    const coords = (selectData?.geometry as any)?.coordinates as
      | [number, number]
      | undefined;
    if (!coords) return [undefined, undefined] as const;
    return [coords[0], coords[1]] as const;
  }, [selectData]);

  const open = !!selectData;

  const deathRate = useMemo(() => {
    if (!properties) return "-";
    const aboard = Number(properties.Aboard ?? 0);
    const fatalities = Number(properties.Fatalities ?? 0);
    if (!aboard || aboard <= 0) return "-";
    const rate = fatalities / aboard;
    return `${(rate * 100).toFixed(2)}%`;
  }, [properties]);

  return (
    <Drawer
      title={<Title level={5} style={{ margin: 0 }}>事故详情</Title>}
      width={520}
      open={open}
      destroyOnClose
      onClose={() => (setSelectData as unknown as (v: undefined) => void)(undefined)}
    >
      {properties ? (
        <Space direction="vertical" size={16} style={{ width: "100%" }}>
          <Descriptions
            title={
              <Space wrap>
                <Text strong>{properties?.Location || "未知地点"}</Text>
                {properties?.country ? <Tag color="blue">{properties.country}</Tag> : null}
                {typeof properties?.index === "number" ? (
                  <Tag>编号 {properties.index}</Tag>
                ) : null}
              </Space>
            }
            bordered
            column={1}
            size="middle"
          >
            <Descriptions.Item label="日期">
              {properties?.Date || "-"}
            </Descriptions.Item>
            <Descriptions.Item label="时间">
              {formatTimeFromFraction(properties?.Time)}
            </Descriptions.Item>
            <Descriptions.Item label="航空公司/运营商">
              {properties?.Operator || "-"}
            </Descriptions.Item>
            <Descriptions.Item label="航线">
              {properties?.Route || "-"}
            </Descriptions.Item>
            <Descriptions.Item label="机型">
              {properties?.Type || "-"}
            </Descriptions.Item>
            <Descriptions.Item label="注册号">
              {properties?.Registration || "-"}
            </Descriptions.Item>
            <Descriptions.Item label="出厂序列号">
              {properties?.["cn/In"] || "-"}
            </Descriptions.Item>
          </Descriptions>

          <Descriptions title="人员与损失" bordered column={2} size="middle">
            <Descriptions.Item label="搭载">
              {formatNumber(properties?.Aboard)}
            </Descriptions.Item>
            <Descriptions.Item label="死亡人数">
              {formatNumber(properties?.Fatalities)}
            </Descriptions.Item>
            <Descriptions.Item label="地面伤亡">
              {formatNumber(properties?.Ground)}
            </Descriptions.Item>
            <Descriptions.Item label="死亡率">
              {deathRate}
            </Descriptions.Item>
          </Descriptions>

          <Descriptions title="地理信息" bordered column={2} size="middle">
            <Descriptions.Item label="经度">
              {typeof lng === "number" ? lng.toFixed(6) : "-"}
            </Descriptions.Item>
            <Descriptions.Item label="纬度">
              {typeof lat === "number" ? lat.toFixed(6) : "-"}
            </Descriptions.Item>
            <Descriptions.Item label="坐标类型">{selectData?.geometry?.type || "-"}</Descriptions.Item>
            <Descriptions.Item label="国家">
              {properties?.country || "-"}
            </Descriptions.Item>
          </Descriptions>

          <Divider style={{ margin: "8px 0" }} />
          <div>
            <Text strong>摘要</Text>
            <Paragraph style={{ marginTop: 8 }}>
              {properties?.Summary || "-"}
            </Paragraph>
          </div>
        </Space>
      ) : (
        <Text type="secondary">请选择地图上的一个事故点以查看详情。</Text>
      )}
    </Drawer>
  );
};

export default DetailsDrawer;