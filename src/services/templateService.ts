import Handlebars from "handlebars";

export type TemplateData = {
  name?: string;
  // email?: string;
  [key: string]: any;
};

const defaultTemplate = `
<html>
  <body style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 20px;">
    <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 8px;">
      <h2 style="color: #333;">Hello {{name}},</h2>
      <p>Welcome to our platform 🎉</p>
      <p>Your registered email: <b>{{email}}</b></p>
      <hr />
      <footer style="font-size: 12px; color: #777;">
        © {{year}} TAD Application. All rights reserved.
      </footer>
    </div>
  </body>
</html>
`;

export function renderTemplate(
  data: TemplateData,
  customTemplate?: string
): string {
  const template = customTemplate;
  const compiled = Handlebars.compile(template);
  return compiled({
    ...data,
    year: new Date().getFullYear(),
  });
}
