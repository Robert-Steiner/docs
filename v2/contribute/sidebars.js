module.exports = {
  sidebar: [
    "introduction",
    {
      type: "category",
      label: "Architecture",
      items: [
        "architecture/overview",
        "architecture/recipes",
        {
          type: "category",
          label: "Modules",
          items: [
            "architecture/modules/frontend",
            "architecture/modules/backend",
            "architecture/modules/core",
            "architecture/modules/db-plugin",
          ],
        },
        {
          type: "category",
          label: "Interfaces",
          items: [
            "architecture/interfaces/fdi",
            "architecture/interfaces/cdi",
            "architecture/interfaces/plugin-interface",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "SDK & Core code architecture",
      items: [
        {
          type: "category",
          label: "Frontend",
          items: [
            "module-architecture/frontend/overview",
            "module-architecture/frontend/recipe-structure",
            "module-architecture/frontend/recipe-base-class",
            "module-architecture/frontend/session-interception",
            "module-architecture/frontend/super-recipe",
          ],
        },
        {
          type: "category",
          label: "Backend",
          items: [
            "module-architecture/backend/overview",
            "module-architecture/backend/recipe-structure",
            "module-architecture/backend/super-recipe",
            "module-architecture/backend/session-verification",
            "module-architecture/backend/setting-header-cookies",
            "module-architecture/backend/user-deletion",
          ],
        },
        {
          type: "category",
          label: "Core",
          items: [
            "module-architecture/core/overview",
            "module-architecture/core/transactions",
            "module-architecture/core/plugin-interface",
            "module-architecture/core/db-plugins",
            "module-architecture/core/testing",
            "module-architecture/core/cli-and-installer",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Recipe Design",
      items: [
        "recipe-design/about",
        "recipe-design/frontend",
        "recipe-design/backend",
        {
          type: "category",
          label: "Core",
          items: ["recipe-design/core/table", "recipe-design/core/core-logic"],
        },
        "recipe-design/api-design",
        "recipe-design/overrides",
      ],
    },
    {
      type: "category",
      label: "Development workflow",
      items: [
        "dev-workflow/setting-up-dev-env",
        "dev-workflow/project-management",
        "dev-workflow/git-organised",
        "dev-workflow/github-action",
      ],
    },
    {
      type: "category",
      label: "Code style",
      items: [
        "code-style/general",
        "code-style/type-thinking",
        "code-style/typescript",
        "code-style/react",
        "code-style/java",
        "code-style/go",
      ],
    },
    {
      type: "category",
      label: "Checklists",
      items: [
        "checklists/new-backend-sdk",
        "checklists/new-frontend-sdk",
        "checklists/new-github-sdk",
        "checklists/new-super-recipe",
        {
          type: "category",
          label: "SaaS",
          items: [
            "checklists/saas/add-new-region",
            "checklists/saas/scaling-prod-instances",
            "checklists/saas/upgrading-users-core-version",
            "checklists/saas/issues-removing-app",
            "checklists/saas/mysql-rds",
            "checklists/saas/adding-new-ec2-instance-for-node-api",
            "checklists/saas/db-restore",
            "checklists/saas/adding-instances-to-load-blancer",
            "checklists/saas/custom-core-deployment",
            "checklists/saas/launch-boxyhq-containers",
            "checklists/saas/adding-cores-for-user",
            "checklists/saas/tables-to-consider-for-data-migration-dev-to-prod",
          ],
        },
        {
          type: "category",
          label: "Website Dev",
          items: ["checklists/website/webflow"],
        },
        "checklists/pricing-change-checklist",
        "checklists/new-tech-stack-launch",
      ],
    },
    {
      type: "category",
      label: "Decision logs",
      items: [
        "decisions/about",
        {
          type: "category",
          label: "Sessions",
          items: [
            "decisions/session/0001",
            "decisions/session/0002",
            "decisions/session/0003",
            "decisions/session/0004",
            "decisions/session/0006",
            "decisions/session/0007",
            "decisions/session/0008",
            "decisions/session/0009",
            "decisions/session/0010",
            "decisions/session/0011",
            "decisions/session/0012",
            "decisions/session/0013",
            "decisions/session/0014",
            "decisions/session/0015",
            "decisions/session/0016",
            "decisions/session/0017",
            "decisions/session/0018",
            "decisions/session/0019",
            "decisions/session/0020",
            "decisions/session/0021"
          ],
        },
        {
          type: "category",
          label: "Session claims",
          items: [
            "decisions/sessionclaims/0001",
            "decisions/sessionclaims/0002",
            "decisions/sessionclaims/0003",
            "decisions/sessionclaims/0004"
          ],
        },
        {
          type: "category",
          label: "Passwordless",
          items: [
            "decisions/passwordless/0001",
            "decisions/passwordless/0002",
          ],
        },
        {
          type: "category",
          label: "Account-linking",
          items: [
            "decisions/accountlinking/0001",
            "decisions/accountlinking/0002",
            "decisions/accountlinking/0003",
            "decisions/accountlinking/0004",
            "decisions/accountlinking/0006",
            "decisions/accountlinking/0005",
          ],
        },
        {
          type: "category",
          label: "User management dashboard",
          items: [
            "decisions/dashboard/0001",
            "decisions/dashboard/0002"
          ],
        },
      ],
    },
  ],
};
