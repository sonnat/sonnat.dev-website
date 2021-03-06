import PencilO from "@sonnat/icons/PencilO";
import Button from "@sonnat/ui/Button";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import createClassName from "classnames";
import * as React from "react";

const componentName = "PageEditButton";

interface Props {
  className?: string;
  href: string;
}

const useStyles = makeStyles(
  {
    root: { marginLeft: "auto" }
  },
  { name: componentName }
);

const PageEditButton = React.memo(function PageEditButton(props: Props) {
  const { className, href, ...otherProps } = props;

  const classes = useStyles();

  return (
    <Button
      {...otherProps}
      className={createClassName(classes.root, className)}
      rootNode="a"
      href={`https://github.com/sonnat/sonnat.github.io/blob/main/${href}`}
      variant="inlined"
      target="_blank"
      rel="noopener noreferrer"
      title="Edit page on github"
      aria-label="Edit page on github"
      leadingIcon={<PencilO />}
    />
  );
});

PageEditButton.displayName = componentName;

export default PageEditButton;
