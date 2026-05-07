import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useState, useMemo, useRef, useEffect } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { X, PanelLeft, ChevronDown, Check, ChevronUp, Boxes, Search, Coffee, Code2, Braces, FileJson, FileCode2, GitBranch, Play, GitPullRequest, Package, AlertTriangle, ShieldCheck, Activity, Loader2, Terminal, RotateCw, FileSearch } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { useRouterState, Link } from "@tanstack/react-router";
import * as SelectPrimitive from "@radix-ui/react-select";
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(
    void 0
  );
  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Separator = React.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx(
    SeparatorPrimitive.Root,
    {
      ref,
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      ),
      ...props
    }
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;
const Sheet = SheetPrimitive.Root;
const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxs(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(sheetVariants({ side }), className),
      ...props,
      children: [
        /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] }),
        children
      ]
    }
  )
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  }
);
SheetHeader.displayName = "SheetHeader";
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;
function Skeleton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn("animate-pulse rounded-md bg-primary/10", className),
      ...props
    }
  );
}
const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin)",
      className
    ),
    ...props
  }
) }));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const SidebarContext = React.createContext(null);
function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
const SidebarProvider = React.forwardRef(
  ({
    defaultOpen = true,
    open: openProp,
    onOpenChange: setOpenProp,
    className,
    style,
    children,
    ...props
  }, ref) => {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = React.useState(false);
    const [_open, _setOpen] = React.useState(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = React.useCallback(
      (value) => {
        const openState = typeof value === "function" ? value(open) : value;
        if (setOpenProp) {
          setOpenProp(openState);
        } else {
          _setOpen(openState);
        }
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      },
      [setOpenProp, open]
    );
    const toggleSidebar = React.useCallback(() => {
      return isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
    }, [isMobile, setOpen, setOpenMobile]);
    React.useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
          event.preventDefault();
          toggleSidebar();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [toggleSidebar]);
    const state = open ? "expanded" : "collapsed";
    const contextValue = React.useMemo(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar
      }),
      [
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar
      ]
    );
    return /* @__PURE__ */ jsx(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          "--sidebar-width": SIDEBAR_WIDTH,
          "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
          ...style
        },
        className: cn(
          "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
          className
        ),
        ref,
        ...props,
        children
      }
    ) }) });
  }
);
SidebarProvider.displayName = "SidebarProvider";
const Sidebar = React.forwardRef(
  ({
    side = "left",
    variant = "sidebar",
    collapsible = "offcanvas",
    className,
    children,
    ...props
  }, ref) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
    if (collapsible === "none") {
      return /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground",
            className
          ),
          ref,
          ...props,
          children
        }
      );
    }
    if (isMobile) {
      return /* @__PURE__ */ jsx(Sheet, { open: openMobile, onOpenChange: setOpenMobile, ...props, children: /* @__PURE__ */ jsxs(
        SheetContent,
        {
          "data-sidebar": "sidebar",
          "data-mobile": "true",
          className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
          style: {
            "--sidebar-width": SIDEBAR_WIDTH_MOBILE
          },
          side,
          children: [
            /* @__PURE__ */ jsxs(SheetHeader, { className: "sr-only", children: [
              /* @__PURE__ */ jsx(SheetTitle, { children: "Sidebar" }),
              /* @__PURE__ */ jsx(SheetDescription, { children: "Displays the mobile sidebar." })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex h-full w-full flex-col", children })
          ]
        }
      ) });
    }
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: "group peer hidden text-sidebar-foreground md:block",
        "data-state": state,
        "data-collapsible": state === "collapsed" ? collapsible : "",
        "data-variant": variant,
        "data-side": side,
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
                "group-data-[collapsible=offcanvas]:w-0",
                "group-data-[side=right]:rotate-180",
                variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
              )
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
                side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
                // Adjust the padding for floating and inset variants.
                variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
                className
              ),
              ...props,
              children: /* @__PURE__ */ jsx(
                "div",
                {
                  "data-sidebar": "sidebar",
                  className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
                  children
                }
              )
            }
          )
        ]
      }
    );
  }
);
Sidebar.displayName = "Sidebar";
const SidebarTrigger = React.forwardRef(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      className: cn("h-7 w-7", className),
      onClick: (event) => {
        onClick?.(event);
        toggleSidebar();
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx(PanelLeft, {}),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
});
SidebarTrigger.displayName = "SidebarTrigger";
const SidebarRail = React.forwardRef(({ className, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsx(
    "button",
    {
      ref,
      "data-sidebar": "rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: toggleSidebar,
      title: "Toggle Sidebar",
      className: cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      ),
      ...props
    }
  );
});
SidebarRail.displayName = "SidebarRail";
const SidebarInset = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "main",
    {
      ref,
      className: cn(
        "relative flex w-full flex-1 flex-col bg-background",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className
      ),
      ...props
    }
  );
});
SidebarInset.displayName = "SidebarInset";
const SidebarInput = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    Input,
    {
      ref,
      "data-sidebar": "input",
      className: cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className
      ),
      ...props
    }
  );
});
SidebarInput.displayName = "SidebarInput";
const SidebarHeader = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      "data-sidebar": "header",
      className: cn("flex flex-col gap-2 p-2", className),
      ...props
    }
  );
});
SidebarHeader.displayName = "SidebarHeader";
const SidebarFooter = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      "data-sidebar": "footer",
      className: cn("flex flex-col gap-2 p-2", className),
      ...props
    }
  );
});
SidebarFooter.displayName = "SidebarFooter";
const SidebarSeparator = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    Separator,
    {
      ref,
      "data-sidebar": "separator",
      className: cn("mx-2 w-auto bg-sidebar-border", className),
      ...props
    }
  );
});
SidebarSeparator.displayName = "SidebarSeparator";
const SidebarContent = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      "data-sidebar": "content",
      className: cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      ),
      ...props
    }
  );
});
SidebarContent.displayName = "SidebarContent";
const SidebarGroup = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      "data-sidebar": "group",
      className: cn("relative flex w-full min-w-0 flex-col p-2", className),
      ...props
    }
  );
});
SidebarGroup.displayName = "SidebarGroup";
const SidebarGroupLabel = React.forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      "data-sidebar": "group-label",
      className: cn(
        "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      ),
      ...props
    }
  );
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";
const SidebarGroupAction = React.forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      "data-sidebar": "group-action",
      className: cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
});
SidebarGroupAction.displayName = "SidebarGroupAction";
const SidebarGroupContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    "data-sidebar": "group-content",
    className: cn("w-full text-sm", className),
    ...props
  }
));
SidebarGroupContent.displayName = "SidebarGroupContent";
const SidebarMenu = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "ul",
  {
    ref,
    "data-sidebar": "menu",
    className: cn("flex w-full min-w-0 flex-col gap-1", className),
    ...props
  }
));
SidebarMenu.displayName = "SidebarMenu";
const SidebarMenuItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "li",
  {
    ref,
    "data-sidebar": "menu-item",
    className: cn("group/menu-item relative", className),
    ...props
  }
));
SidebarMenuItem.displayName = "SidebarMenuItem";
const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_var(--sidebar-border)] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_var(--sidebar-accent)]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const SidebarMenuButton = React.forwardRef(
  ({
    asChild = false,
    isActive = false,
    variant = "default",
    size = "default",
    tooltip,
    className,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : "button";
    const { isMobile, state } = useSidebar();
    const button = /* @__PURE__ */ jsx(
      Comp,
      {
        ref,
        "data-sidebar": "menu-button",
        "data-size": size,
        "data-active": isActive,
        className: cn(sidebarMenuButtonVariants({ variant, size }), className),
        ...props
      }
    );
    if (!tooltip) {
      return button;
    }
    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip
      };
    }
    return /* @__PURE__ */ jsxs(Tooltip, { children: [
      /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: button }),
      /* @__PURE__ */ jsx(
        TooltipContent,
        {
          side: "right",
          align: "center",
          hidden: state !== "collapsed" || isMobile,
          ...tooltip
        }
      )
    ] });
  }
);
SidebarMenuButton.displayName = "SidebarMenuButton";
const SidebarMenuAction = React.forwardRef(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      "data-sidebar": "menu-action",
      className: cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className
      ),
      ...props
    }
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";
const SidebarMenuBadge = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    "data-sidebar": "menu-badge",
    className: cn(
      "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      className
    ),
    ...props
  }
));
SidebarMenuBadge.displayName = "SidebarMenuBadge";
const SidebarMenuSkeleton = React.forwardRef(({ className, showIcon = false, ...props }, ref) => {
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      "data-sidebar": "menu-skeleton",
      className: cn("flex h-8 items-center gap-2 rounded-md px-2", className),
      ...props,
      children: [
        showIcon && /* @__PURE__ */ jsx(
          Skeleton,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ jsx(
          Skeleton,
          {
            className: "h-4 max-w-(--skeleton-width) flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": width
            }
          }
        )
      ]
    }
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";
const SidebarMenuSub = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "ul",
  {
    ref,
    "data-sidebar": "menu-sub",
    className: cn(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
      "group-data-[collapsible=icon]:hidden",
      className
    ),
    ...props
  }
));
SidebarMenuSub.displayName = "SidebarMenuSub";
const SidebarMenuSubItem = React.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsx("li", { ref, ...props }));
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
const SidebarMenuSubButton = React.forwardRef(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      "data-sidebar": "menu-sub-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";
const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
const mockRepos = [
  {
    id: "1",
    name: "frontend-web",
    language: "TypeScript",
    lastCommit: "2h ago",
    health: "healthy",
    openPRs: 3,
    dependencies: 142,
    outdated: 6,
    coverage: 87
  },
  {
    id: "2",
    name: "api-gateway",
    language: "Go",
    lastCommit: "1d ago",
    health: "warning",
    openPRs: 7,
    dependencies: 54,
    outdated: 12,
    coverage: 72
  },
  {
    id: "3",
    name: "ml-pipeline",
    language: "Python",
    lastCommit: "5h ago",
    health: "critical",
    openPRs: 11,
    dependencies: 203,
    outdated: 34,
    coverage: 48
  },
  {
    id: "4",
    name: "auth-service",
    language: "TypeScript",
    lastCommit: "30m ago",
    health: "healthy",
    openPRs: 1,
    dependencies: 78,
    outdated: 2,
    coverage: 94
  },
  {
    id: "5",
    name: "billing-core",
    language: "Java",
    lastCommit: "3d ago",
    health: "warning",
    openPRs: 4,
    dependencies: 96,
    outdated: 9,
    coverage: 81
  },
  {
    id: "6",
    name: "mobile-app",
    language: "TypeScript",
    lastCommit: "6h ago",
    health: "healthy",
    openPRs: 2,
    dependencies: 167,
    outdated: 4,
    coverage: 76
  },
  {
    id: "7",
    name: "data-warehouse",
    language: "Python",
    lastCommit: "12h ago",
    health: "warning",
    openPRs: 5,
    dependencies: 88,
    outdated: 15,
    coverage: 65
  }
];
const languageIcon = {
  TypeScript: FileCode2,
  JavaScript: FileJson,
  Python: Braces,
  Go: Code2,
  Java: Coffee
};
const healthDot = {
  healthy: "bg-status-success",
  warning: "bg-amber-400",
  critical: "bg-status-failure"
};
function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const currentPath = useRouterState({
    select: (router) => router.location.pathname
  });
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("all");
  const [status, setStatus] = useState("all");
  const languages = useMemo(
    () => Array.from(new Set(mockRepos.map((r) => r.language))),
    []
  );
  const filtered = useMemo(() => {
    return mockRepos.filter((r) => {
      if (query && !r.name.toLowerCase().includes(query.toLowerCase()))
        return false;
      if (language !== "all" && r.language !== language) return false;
      if (status !== "all" && r.health !== status) return false;
      return true;
    });
  }, [query, language, status]);
  return /* @__PURE__ */ jsxs(Sidebar, { collapsible: "icon", children: [
    /* @__PURE__ */ jsx(SidebarHeader, { className: "border-b border-sidebar-border", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-2 py-1.5", children: [
      /* @__PURE__ */ jsx("div", { className: "h-7 w-7 rounded-md bg-primary text-primary-foreground grid place-items-center shrink-0", children: /* @__PURE__ */ jsx(Boxes, { className: "h-4 w-4" }) }),
      !collapsed && /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold leading-tight", children: "DevPortal" }),
        /* @__PURE__ */ jsx("p", { className: "text-[11px] text-muted-foreground leading-tight", children: "AI-native workflows" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(SidebarContent, { children: [
      !collapsed && /* @__PURE__ */ jsxs("div", { className: "px-2 pt-2 space-y-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(Search, { className: "absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              placeholder: "Search repos...",
              value: query,
              onChange: (e) => setQuery(e.target.value),
              className: "h-8 pl-7 text-xs"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5", children: [
          /* @__PURE__ */ jsxs(Select, { value: language, onValueChange: setLanguage, children: [
            /* @__PURE__ */ jsx(SelectTrigger, { className: "h-7 text-xs flex-1", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsx(SelectItem, { value: "all", children: "All langs" }),
              languages.map((l) => /* @__PURE__ */ jsx(SelectItem, { value: l, children: l }, l))
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Select, { value: status, onValueChange: setStatus, children: [
            /* @__PURE__ */ jsx(SelectTrigger, { className: "h-7 text-xs flex-1", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsx(SelectItem, { value: "all", children: "All status" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "healthy", children: "Healthy" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "warning", children: "Warning" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "critical", children: "Critical" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(SidebarGroup, { children: [
        /* @__PURE__ */ jsx(SidebarGroupLabel, { children: "Repositories" }),
        /* @__PURE__ */ jsx(SidebarGroupContent, { children: /* @__PURE__ */ jsxs(SidebarMenu, { children: [
          filtered.map((repo) => {
            const url = `/repo/${repo.id}`;
            const isActive = currentPath === url;
            const LangIcon = languageIcon[repo.language] ?? GitBranch;
            return /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsx(
              SidebarMenuButton,
              {
                asChild: true,
                isActive,
                tooltip: repo.name,
                className: "h-auto py-2",
                children: /* @__PURE__ */ jsxs(Link, { to: "/repo/$repoId", params: { repoId: repo.id }, children: [
                  /* @__PURE__ */ jsx(LangIcon, { className: "h-4 w-4 shrink-0 text-muted-foreground" }),
                  !collapsed && /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-w-0 flex-1", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "truncate text-sm", children: repo.name }),
                      /* @__PURE__ */ jsx(
                        "span",
                        {
                          className: `h-1.5 w-1.5 rounded-full shrink-0 ${healthDot[repo.health]}`
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxs("span", { className: "text-[10px] text-muted-foreground truncate", children: [
                      repo.language,
                      " ",
                      repo.lastCommit
                    ] })
                  ] })
                ] })
              }
            ) }, repo.id);
          }),
          filtered.length === 0 && !collapsed && /* @__PURE__ */ jsx("p", { className: "px-3 py-4 text-xs text-muted-foreground text-center", children: "No repositories" })
        ] }) })
      ] })
    ] })
  ] });
}
const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("font-semibold leading-none tracking-tight", className),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
const healthChip = {
  healthy: "bg-status-success/15 text-status-success border-status-success/30",
  warning: "bg-amber-400/15 text-amber-400 border-amber-400/30",
  critical: "bg-status-failure/15 text-status-failure border-status-failure/30"
};
function Stat({
  label,
  value,
  icon: Icon,
  accent
}) {
  return /* @__PURE__ */ jsxs(Card, { className: "p-4 transition-colors hover:bg-muted/30", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wide text-muted-foreground", children: label }),
      /* @__PURE__ */ jsx(Icon, { className: `h-4 w-4 ${accent ?? "text-muted-foreground"}` })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-2xl font-semibold tabular-nums", children: value })
  ] });
}
function RepoOverview({ repo, onRunAgent }) {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4 flex-wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold tracking-tight", children: repo.name }),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: `text-xs px-2 py-0.5 rounded-full border font-medium ${healthChip[repo.health]}`,
              children: repo.health
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
          repo.language,
          " last commit ",
          repo.lastCommit
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Button, { size: "lg", onClick: onRunAgent, className: "gap-2", children: [
        /* @__PURE__ */ jsx(Play, { className: "h-4 w-4 fill-current" }),
        "Run Agent Task"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3", children: [
      /* @__PURE__ */ jsx(Stat, { label: "Open PRs", value: repo.openPRs, icon: GitPullRequest }),
      /* @__PURE__ */ jsx(Stat, { label: "Dependencies", value: repo.dependencies, icon: Package }),
      /* @__PURE__ */ jsx(
        Stat,
        {
          label: "Outdated",
          value: repo.outdated,
          icon: AlertTriangle,
          accent: repo.outdated > 10 ? "text-status-failure" : "text-amber-400"
        }
      ),
      /* @__PURE__ */ jsx(
        Stat,
        {
          label: "Coverage",
          value: `${repo.coverage}%`,
          icon: ShieldCheck,
          accent: repo.coverage >= 80 ? "text-status-success" : "text-amber-400"
        }
      ),
      /* @__PURE__ */ jsx(Stat, { label: "Health", value: repo.health, icon: Activity })
    ] })
  ] });
}
const taskScripts = {
  "Create Pull Request": [
    "Agent started",
    "Analyzing branch diff",
    "Generating PR description",
    "Pushing branch to origin",
    "Opening pull request",
    "PR #482 created successfully"
  ],
  "Refactor Code": [
    "Agent started",
    "Loading project context",
    "Identifying refactor candidates",
    "Applying transformations",
    "Re-running type checks",
    "Refactor complete"
  ],
  "Upgrade Dependencies": [
    "Agent started",
    "Scanning dependencies",
    "Found outdated packages",
    "Resolving version conflicts",
    "Updating dependencies",
    "Running tests",
    "Tests passed"
  ],
  "Run Tests": [
    "Agent started",
    "Discovering test suites",
    "Running unit tests",
    "Running integration tests",
    "Collecting coverage",
    "All tests passed"
  ],
  "Security Scan": [
    "Agent started",
    "Fetching CVE database",
    "Scanning dependencies",
    "Checking secrets in source",
    "Generating security report",
    "Scan complete: 2 advisories"
  ],
  "Dependency Analysis": [
    "Agent started",
    "Building dependency graph",
    "Detecting circular imports",
    "Analyzing bundle impact",
    "Report ready"
  ]
};
function timestamp() {
  const d = /* @__PURE__ */ new Date();
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}:${String(d.getSeconds()).padStart(2, "0")}`;
}
function runAgent(task) {
  const lines = taskScripts[task] ?? ["Agent started", "Working", "Done"];
  const listeners = /* @__PURE__ */ new Set();
  let cancelled = false;
  let idx = 0;
  const emit = (event) => {
    listeners.forEach((l) => l(event));
  };
  setTimeout(() => {
    if (cancelled) return;
    emit({ type: "status", status: "running" });
    tick();
  }, 600);
  const tick = () => {
    if (cancelled) return;
    if (idx < lines.length) {
      emit({ type: "log", log: `[${timestamp()}] ${lines[idx]}` });
      idx++;
      setTimeout(tick, 1e3);
    } else {
      const success = Math.random() > 0.1;
      const finalStatus = success ? "success" : "failure";
      emit({
        type: "log",
        log: `[${timestamp()}] ${success ? "✓ Task completed successfully" : "✗ Task failed unexpectedly"}`
      });
      const result = {
        duration: `${lines.length}.0s`,
        filesModified: Math.floor(Math.random() * 12) + 1,
        testsExecuted: Math.floor(Math.random() * 200) + 20,
        coverageChange: success ? `+${(Math.random() * 3).toFixed(1)}%` : `-${(Math.random() * 2).toFixed(1)}%`
      };
      emit({ type: "status", status: finalStatus });
      emit({ type: "complete", status: finalStatus, result });
    }
  };
  return {
    cancel: () => {
      cancelled = true;
      listeners.clear();
    },
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    }
  };
}
function logColor(line) {
  if (line.includes("✓") || /passed|success|complete/i.test(line))
    return "text-status-success";
  if (line.includes("✗") || /fail|error/i.test(line))
    return "text-status-failure";
  if (/warn|outdated|advisor/i.test(line)) return "text-amber-400";
  return "text-zinc-300";
}
function LogStream({ logs, status }) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
  }, [logs]);
  return /* @__PURE__ */ jsxs("div", { className: "flex-1 min-h-0 flex flex-col bg-terminal text-terminal-foreground", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 px-3 py-1.5 border-b border-white/5 bg-black/30", children: [
      /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-rose-500/80" }),
      /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-amber-500/80" }),
      /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-emerald-500/80" }),
      /* @__PURE__ */ jsx("span", { className: "ml-2 text-[11px] font-mono text-zinc-500", children: "agent — bash" })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: "flex-1 overflow-y-auto px-4 py-3 font-mono text-xs leading-relaxed",
        children: logs.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-zinc-500", children: [
          /* @__PURE__ */ jsx(Loader2, { className: "h-3 w-3 animate-spin" }),
          /* @__PURE__ */ jsx("span", { children: "Initializing agent…" })
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          logs.map((line, i) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: `whitespace-pre-wrap animate-in fade-in slide-in-from-left-1 duration-200 ${logColor(line)}`,
              children: [
                /* @__PURE__ */ jsx("span", { className: "text-zinc-600 mr-1", children: "$" }),
                line
              ]
            },
            i
          )),
          status === "running" && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mt-1 text-status-running", children: [
            /* @__PURE__ */ jsx(Loader2, { className: "h-3 w-3 animate-spin" }),
            /* @__PURE__ */ jsx("span", { className: "animate-pulse", children: "streaming…" })
          ] })
        ] })
      }
    )
  ] });
}
const styles = {
  pending: "bg-muted text-muted-foreground border-border",
  running: "bg-status-running/15 text-status-running border-status-running/30",
  success: "bg-status-success/15 text-status-success border-status-success/30",
  failure: "bg-status-failure/15 text-status-failure border-status-failure/30"
};
const dotStyles = {
  pending: "bg-muted-foreground",
  running: "bg-status-running",
  success: "bg-status-success",
  failure: "bg-status-failure"
};
function StatusBadge({ status, className = "" }) {
  return /* @__PURE__ */ jsxs(
    "span",
    {
      className: `inline-flex items-center gap-1.5 text-xs px-2 py-0.5 rounded-full border font-medium transition-colors ${styles[status]} ${className}`,
      children: [
        status === "running" ? /* @__PURE__ */ jsx(Loader2, { className: "h-3 w-3 animate-spin" }) : /* @__PURE__ */ jsx(
          "span",
          {
            className: `h-1.5 w-1.5 rounded-full ${dotStyles[status]} ${status === "pending" ? "animate-pulse" : ""}`
          }
        ),
        status
      ]
    }
  );
}
function AgentPanel({
  repo,
  task,
  runId: initialRunId,
  onClose
}) {
  const [logs, setLogs] = useState([]);
  const [status, setStatus] = useState("pending");
  const [result, setResult] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [runId, setRunId] = useState(initialRunId);
  const handleRef = useRef(null);
  useEffect(() => {
    setLogs([]);
    setResult(null);
    setStatus("pending");
    const handle = runAgent(task);
    handleRef.current = handle;
    const unsub = handle.subscribe((event) => {
      if (event.type === "log" && event.log) {
        setLogs((prev) => [...prev, event.log]);
      } else if (event.type === "status" && event.status) {
        setStatus(event.status);
      } else if (event.type === "complete" && event.result) {
        setResult(event.result);
      }
    });
    return () => {
      unsub();
      handle.cancel();
    };
  }, [task, runId, repo.id]);
  const retry = () => setRunId((n) => n + 1);
  const isRunning = status === "running" || status === "pending";
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-full bg-card", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3 border-b border-border px-4 py-2.5", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
        /* @__PURE__ */ jsx(Terminal, { className: "h-4 w-4 text-muted-foreground shrink-0" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium truncate", children: task }),
        /* @__PURE__ */ jsxs("span", { className: "text-xs text-muted-foreground truncate", children: [
          "on ",
          repo.name
        ] }),
        /* @__PURE__ */ jsx(StatusBadge, { status })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
        !isRunning && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "sm", onClick: retry, children: [
            /* @__PURE__ */ jsx(RotateCw, { className: "h-3.5 w-3.5 mr-1" }),
            "Retry"
          ] }),
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: () => setDetailsOpen(true),
              disabled: !result,
              children: [
                /* @__PURE__ */ jsx(FileSearch, { className: "h-3.5 w-3.5 mr-1" }),
                "Details"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7",
            onClick: onClose,
            children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(LogStream, { logs, status }),
    /* @__PURE__ */ jsx(Sheet, { open: detailsOpen, onOpenChange: setDetailsOpen, children: /* @__PURE__ */ jsxs(SheetContent, { children: [
      /* @__PURE__ */ jsxs(SheetHeader, { children: [
        /* @__PURE__ */ jsx(SheetTitle, { children: "Run Details" }),
        /* @__PURE__ */ jsxs(SheetDescription, { children: [
          task,
          " on ",
          repo.name
        ] })
      ] }),
      result && /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-3 text-sm px-1", children: [
        /* @__PURE__ */ jsx(Detail, { label: "Duration", value: result.duration }),
        /* @__PURE__ */ jsx(Detail, { label: "Files modified", value: result.filesModified }),
        /* @__PURE__ */ jsx(Detail, { label: "Tests executed", value: result.testsExecuted }),
        /* @__PURE__ */ jsx(Detail, { label: "Coverage change", value: result.coverageChange }),
        /* @__PURE__ */ jsx(Detail, { label: "Final status", value: status })
      ] })
    ] }) })
  ] });
}
function Detail({ label, value }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-b border-border pb-2", children: [
    /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx("span", { className: "font-medium", children: value })
  ] });
}
const Dialog = SheetPrimitive.Root;
const DialogPortal = SheetPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = SheetPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = SheetPrimitive.Content.displayName;
const DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = SheetPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = SheetPrimitive.Description.displayName;
const AGENT_TASKS = [
  "Create Pull Request",
  "Refactor Code",
  "Upgrade Dependencies",
  "Run Tests",
  "Security Scan",
  "Dependency Analysis"
];
function TaskModal({ open, onOpenChange, onRun }) {
  const [selected, setSelected] = useState(AGENT_TASKS[0]);
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxs(DialogContent, { children: [
    /* @__PURE__ */ jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsx(DialogTitle, { children: "Run Agent Task" }),
      /* @__PURE__ */ jsx(DialogDescription, { children: "Choose a task for the AI agent to perform on this repository." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2 py-2", children: AGENT_TASKS.map((task) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setSelected(task),
        className: `text-left rounded-lg border px-3 py-3 text-sm transition-colors ${selected === task ? "border-primary bg-primary/10" : "border-border hover:bg-muted/50"}`,
        children: task
      },
      task
    )) }),
    /* @__PURE__ */ jsxs(DialogFooter, { children: [
      /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: () => onOpenChange(false), children: "Cancel" }),
      /* @__PURE__ */ jsx(Button, { onClick: () => onRun(selected), children: "Run Agent" })
    ] })
  ] }) });
}
function Home({ repoId }) {
  const selected = mockRepos.find((r) => r.id === repoId) ?? mockRepos[0];
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTask, setActiveTask] = useState(null);
  const [runId, setRunId] = useState(0);
  const handleRun = (task) => {
    setActiveTask(task);
    setRunId((n) => n + 1);
    setModalOpen(false);
  };
  return /* @__PURE__ */ jsx(SidebarProvider, { children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex w-full bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(AppSidebar, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col min-w-0 h-screen", children: [
      /* @__PURE__ */ jsxs("header", { className: "h-12 flex items-center gap-2 border-b border-border px-3 shrink-0", children: [
        /* @__PURE__ */ jsx(SidebarTrigger, {}),
        /* @__PURE__ */ jsx("div", { className: "h-4 w-px bg-border mx-1" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "Repositories" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: selected.name })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col min-h-0", children: [
        /* @__PURE__ */ jsx("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ jsx(
          RepoOverview,
          {
            repo: selected,
            onRunAgent: () => setModalOpen(true)
          }
        ) }),
        /* @__PURE__ */ jsx(
          "section",
          {
            className: `border-t border-border shrink-0 transition-all duration-300 ease-out ${activeTask ? "h-80" : "h-10"}`,
            children: activeTask ? /* @__PURE__ */ jsx(
              AgentPanel,
              {
                repo: selected,
                task: activeTask,
                runId,
                onClose: () => setActiveTask(null)
              }
            ) : /* @__PURE__ */ jsxs("div", { className: "h-full flex items-center px-4 text-xs text-muted-foreground gap-2", children: [
              /* @__PURE__ */ jsx(Terminal, { className: "h-3.5 w-3.5" }),
              "Agent execution panel — run a task to view streaming logs"
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      TaskModal,
      {
        open: modalOpen,
        onOpenChange: setModalOpen,
        onRun: handleRun
      }
    )
  ] }) });
}
export {
  Home as H
};
