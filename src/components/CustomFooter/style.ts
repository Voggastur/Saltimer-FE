import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, _params, getRef) => ({
  text: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[0]
        : theme.colors.dark[8],
  },
}));

export default useStyles;
