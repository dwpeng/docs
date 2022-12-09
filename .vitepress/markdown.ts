import MarkdownIt from 'markdown-it'

export const handleCode = (md: MarkdownIt) => {
    const old_ruler = md.renderer.rules.fence!;
    md.renderer.rules.fence = function (tokens, idx, options, env, renderer) {
        const rendered_string = old_ruler(tokens, idx, options, env, renderer)
        if (tokens[idx].info.toLowerCase().indexOf('py') > -1) {
            const code = Buffer.from(tokens[idx].content, 'utf-8')
            return `<div class="code-container" data-code="${code.toString('base64')}">${rendered_string}</div>`
        }
        return rendered_string;
    }
}
