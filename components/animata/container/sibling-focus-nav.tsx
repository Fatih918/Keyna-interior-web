"use client";

import { type ComponentProps, createContext, use } from "react";

export type SiblingFocusNavMode = "opacity" | "blur";

const SiblingFocusNavModeContext = createContext<SiblingFocusNavMode>("opacity");

const opacityGroupClassName =
  "[&:has(>a:hover)>a:not(:hover)]:opacity-30 " +
  "[&:has(>a:focus-visible)>a:not(:focus-visible)]:opacity-30";

const blurGroupClassName =
  "[&:has(>a:hover)>a:not(:hover)]:blur-sm " +
  "[&:has(>a:focus-visible)>a:not(:focus-visible)]:blur-sm " +
  "motion-reduce:[&:has(>a:hover)>a:not(:hover)]:blur-none " +
  "motion-reduce:[&:has(>a:focus-visible)>a:not(:focus-visible)]:blur-none";

const linkBaseClassName =
  "inline-flex min-h-11 touch-manipulation items-center outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

export function siblingFocusNavLinkClassName(mode: SiblingFocusNavMode = "opacity") {
  return [
    linkBaseClassName,
    mode === "opacity"
      ? "transition-opacity duration-200 ease-out motion-reduce:transition-none"
      : "blur-0 transition-[filter] duration-200 ease-out motion-reduce:transition-none",
  ].join(" ");
}

export function siblingFocusNavGroupClassName(mode: SiblingFocusNavMode = "opacity") {
  return mode === "blur" ? blurGroupClassName : opacityGroupClassName;
}

export const siblingFocusNavSpacingXClassName = "[&>a:not(:last-child)]:pe-6";
export const siblingFocusNavSpacingYClassName = "[&>a:not(:last-child)]:pb-2.5";

type SpacingAxis = "x" | "y" | "none";

type RootProps = ComponentProps<"nav"> & {
  mode?: SiblingFocusNavMode;
  spacingAxis?: SpacingAxis;
};

function SiblingFocusNavRoot({
  mode = "opacity",
  spacingAxis = "x",
  className,
  ...props
}: RootProps) {
  const spacingClassName =
    spacingAxis === "y"
      ? siblingFocusNavSpacingYClassName
      : spacingAxis === "none"
        ? ""
        : siblingFocusNavSpacingXClassName;

  return (
    <SiblingFocusNavModeContext.Provider value={mode}>
      <nav
        className={[
          "flex flex-wrap items-center",
          spacingClassName,
          siblingFocusNavGroupClassName(mode),
          className ?? "",
        ].filter(Boolean).join(" ")}
        {...props}
      />
    </SiblingFocusNavModeContext.Provider>
  );
}

type LinkProps = ComponentProps<"a"> & {
  mode?: SiblingFocusNavMode;
};

function SiblingFocusNavLink({ mode, className, ...props }: LinkProps) {
  const contextMode = use(SiblingFocusNavModeContext);
  const resolvedMode = mode ?? contextMode;

  return (
    <a
      className={[siblingFocusNavLinkClassName(resolvedMode), className ?? ""]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}

const SiblingFocusNav = Object.assign(SiblingFocusNavRoot, {
  Link: SiblingFocusNavLink,
  linkClassName: siblingFocusNavLinkClassName("opacity"),
  groupClassName: opacityGroupClassName,
  getLinkClassName: siblingFocusNavLinkClassName,
  getGroupClassName: siblingFocusNavGroupClassName,
  spacingXClassName: siblingFocusNavSpacingXClassName,
  spacingYClassName: siblingFocusNavSpacingYClassName,
});

export default SiblingFocusNav;
