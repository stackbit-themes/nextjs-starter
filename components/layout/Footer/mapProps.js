import { marked } from "marked";

export const mapProps = async (props) => {
  const body = marked.parse(props.body);
  return { ...props, body };
};
