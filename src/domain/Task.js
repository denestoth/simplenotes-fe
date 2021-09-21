class Task {
    constructor(id, title, text, status, notes, tags, createdAt, modifiedAt){
        this.id = id;
        this.title = title;
        this.text = text;
        this.status = status;
        this.notes = notes;
        this.tags = tags;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
    }
}

export default Task