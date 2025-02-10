import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const RichText = ({ content }) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <span className="font-bold">{text}</span>,
      [MARKS.ITALIC]: text => <span className="italic">{text}</span>,
      [MARKS.CODE]: text => (
        <pre className="bg-gray-100 p-2 rounded">
          <code>{text}</code>
        </pre>
      )
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (
          node.content.find(item =>
            item.marks?.find(mark => mark.type === 'code')
          )
        ) {
          return (
            <div className="my-4">
              <pre className="bg-gray-100 p-4 rounded">
                <code>{children}</code>
              </pre>
            </div>
          )
        }
        return <p className="mb-4">{children}</p>
      },

      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="text-4xl font-bold mb-4">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="text-3xl font-bold mb-3">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="text-2xl font-bold mb-2">{children}</h3>
      ),

      [INLINES.HYPERLINK]: node => {
        const text = node.content.find(item => item.nodeType === 'text')?.value
        return (
          <a 
            href={node.data.uri} 
            target='_blank' 
            rel='noopener noreferrer'
            className="text-blue-600 hover:text-blue-800 underline"
          >
            {text}
          </a>
        )
      },

      [BLOCKS.EMBEDDED_ASSET]: node => {
        const asset = content?.assets?.[node.data.target.sys.id];
        
        if (!asset) {
          console.warn('Asset not found:', node.data.target.sys.id);
          return null;
        }

        return (
          <img
            src={`https:${asset.fields.file.url}`}
            height={asset.fields.file.details.image?.height}
            width={asset.fields.file.details.image?.width}
            alt={asset.fields.title || 'Blog image'}
            className="my-4 rounded-lg max-w-full h-auto"
          />
        )
      },

      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="list-disc pl-6 mb-4">{children}</ul>
      ),
      
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="list-decimal pl-6 mb-4">{children}</ol>
      ),

      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className="mb-2">{children}</li>
      ),

      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote className="border-l-4 border-gray-300 pl-4 my-4 italic">
          {children}
        </blockquote>
      ),
    }
  };

  return <div className="prose max-w-none">{documentToReactComponents(content, options)}</div>
}

export default RichText