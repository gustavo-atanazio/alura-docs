import documents from './dbConnect';

function findDocument(name: string) {
    const document = documents?.findOne({ name });
    return document;
}

function updateDocument(name: string, text: string) {
    const update = documents?.updateOne({ name }, { $set: { text } });
    return update;
}

export { findDocument, updateDocument };