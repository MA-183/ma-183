import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Untitled",
    description: "No description provided",
  },
  components: {
    callout: {
      note: "Note",
      abstract: "Abstract",
      info: "Info",
      todo: "Todo",
      tip: "Tip",
      success: "Success",
      question: "Question",
      warning: "Warning",
      failure: "Failure",
      danger: "Danger",
      bug: "Bug",
      example: "Example",
      quote: "Quote",
    },
    backlinks: {
      title: "Tilknyttede sider",
      noBacklinksFound: "Ingen tilknyttede sider funnet",
    },
    themeToggle: {
      lightMode: "Light mode",
      darkMode: "Dark mode",
    },
    explorer: {
      title: "Utforsker",
    },
    footer: {
      createdWith: "Created with",
    },
    graph: {
      title: "Graf-utforsker",
    },
    recentNotes: {
      title: "Recent Notes",
      seeRemainingMore: ({ remaining }) => `See ${remaining} more →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Transclude of ${targetSlug}`,
      linkToOriginal: "Link til original",
    },
    search: {
      title: "Søk",
      searchBarPlaceholder: "Søk etter noe",
    },
    tableOfContents: {
      title: "Innholdsfortegnelse",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes} minutters lesing`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Seneste notater",
      lastFewNotes: ({ count }) => `Seneste ${count} notater`,
    },
    error: {
      title: "Side ikke funnet",
      notFound: "Finner ikke siden.",
      home: "Returner til hjemmesiden",
    },
    folderContent: {
      folder: "Folder",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 side i denne mappen." : `${count} sider i denne mappen.`,
    },
    tagContent: {
      tag: "Tag",
      tagIndex: "Tag Index",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 side i med denne taggen." : `${count} sider i med denne taggen.`,
      showingFirst: ({ count }) => `Viser de ${count} første taggene.`,
      totalTags: ({ count }) => `Fant ${count} tagger.`,
    },
  },
} as const satisfies Translation
