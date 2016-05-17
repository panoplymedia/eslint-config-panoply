module.exports = {
  "ecmaFeatures": {
    "jsx": true
  },

  "plugins": [
    "react"
  ],

  "rules": {
    "react/display-name": 1,
    "react/no-did-mount-set-state": 0,
    "react/no-did-update-set-state": 1,
    "react/no-direct-mutation-state": 1,
    "react/no-unknown-property": 1,
    "react/prop-types": 1,
    "react/react-in-jsx-scope": 1,
    "react/self-closing-comp": 1,
    "react/no-multi-comp": 0,
    "react/wrap-multilines": 1,
    "react/sort-comp": [1, {
      "order": [
        "lifecycle",
        "everything-else",
        "render"
      ],
      "groups": {
        "rendering": [
          "/^render.+$/",
          "render"
        ]
      }
    }],
    "react/jsx-key": 1,
    "react/jsx-boolean-value": 1,
    "react/jsx-no-duplicate-props": 1,
    "react/jsx-no-undef": 1,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/jsx-equals-spacing": [1, "never"],
    "react/jsx-indent": [1, 2],
    "react/jsx-indent-props": [1, 2],
    "react/jsx-closing-bracket-location": [1, {
      "nonEmpty": "after-props",
      "selfClosing": "tag-aligned"
    }]
  }
};
