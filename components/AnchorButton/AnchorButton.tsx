import makeStyles from "@sonnat/ui/styles/makeStyles";
import Button from "@sonnat/ui/Button";
import createClassName from "classnames";
import * as React from "react";

const componentName = "AnchorButton";

interface Props {
  className?: string;
  anchorId: string;
}

const useStyles = makeStyles(
  theme => ({
    root: { position: "relative", marginLeft: theme.typography.pxToRem(8) },
    button: {},
    anchor: {
      position: "absolute",
      top: theme.typography.pxToRem(-64),
      [theme.breakpoints.down("sm")]: { top: theme.typography.pxToRem(-105) }
    }
  }),
  { name: componentName }
);

const AnchorButton = React.memo(function AnchorButton(props: Props) {
  const { className, anchorId, ...otherProps } = props;

  const classes = useStyles();

  return (
    <div {...otherProps} className={createClassName(classes.root, className)}>
      <span id={anchorId} className={classes.anchor}></span>
      <Button
        className={createClassName(classes.button, "anchorButton")}
        rootNode="a"
        href={`#${anchorId}`}
        variant="inlined"
        title="Anchor link"
        aria-label="Anchor link"
        leadingIcon="link"
      />
    </div>
  );
});

AnchorButton.displayName = componentName;

export default AnchorButton;