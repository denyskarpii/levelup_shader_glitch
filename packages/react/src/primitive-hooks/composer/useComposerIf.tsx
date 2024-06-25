"use client";
import { useComposerContext } from "../../context/react/ComposerContext";
import type { RequireAtLeastOne } from "../../utils/RequireAtLeastOne";

type ComposerIfFilters = {
  editing: boolean | undefined;
};

export type UseComposerIfProps = RequireAtLeastOne<ComposerIfFilters>;

export const useComposerIf = (props: UseComposerIfProps) => {
  const { useComposer } = useComposerContext();
  return useComposer((composer) => {
    if (props.editing === true && !composer.isEditing) return false;
    if (props.editing === false && composer.isEditing) return false;

    return true;
  });
};
