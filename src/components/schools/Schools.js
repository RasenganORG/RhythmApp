import { Avatar, List, Skeleton, Tooltip } from "antd";
import { LikeTwoTone } from "@ant-design/icons";
import { like } from "./schoolsSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Schools() {
  const schools = useSelector((state) => state.schools.schools);
  const dispatch = useDispatch();
  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={schools}
      renderItem={(item, index) => (
        <List.Item>
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={
                <Avatar size="large" src="https://joeschmoe.io/api/v1/random" />
              }
              title={<a href="https://ant.design">{item.name}</a>}
              description="School description hereee"
            />
          </Skeleton>
          <p>Trainers:</p>
          <Avatar.Group
            maxCount={2}
            maxPopoverTrigger="hover"
            style={{ marginLeft: "1%" }}
          >
            {Object.keys(item.trainer).map((ind) => (
              <Tooltip title={item.trainer[ind].trainerName} placement="top">
                <Avatar src={item.trainer[ind].trainerPicture} />
              </Tooltip>
            ))}
          </Avatar.Group>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: "2%",
            }}
          >
            <LikeTwoTone
              twoToneColor="#eb2f96"
              onClick={() => dispatch(like(index))}
            />
            <p style={{ color: "#eb2f96" }}>{item.likes}</p>
          </div>
        </List.Item>
      )}
    />
  );
}
