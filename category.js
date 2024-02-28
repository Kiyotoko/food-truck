
class Buildable {
    constructor(title, description) {
        this.title = title
        this.description = description
    }

    build () { throw new Error('Unsupported') }
}

class Category extends Buildable {
    constructor(title, description, level, items) {
        super(title, description)
        if (level < 1 || level > 7) throw new Error('Level outside range [1:6]')
        this.level = level
        this.items = items
    }

    build() {
        let build = '<h' + this.level + '>' + this.title + '</h'+ this.level + '>'
        if (this.description != null) build += '<p>' + this.description + '</p>'
        if (this.items != null) {
            for (let item of this.items) build += item.build()
        }
        return build
    }
}

class Item extends Buildable {
    constructor(title, description, price) {
        super(title, description)
        this.price = price
    }

    build() {
        let build = '<div class="info"><div>' + this.title + '</div>'
        if (this.description != null) build += '<div class="description">' + this.description + '</div>'
        build += '</div>'
        if (this.price != 0) build += '<div class="price">' + this.price + ' $</div>'
        return '<div class="container">' + build + '</div>'
    }
}

class Img extends Buildable {
    constructor(path) {
        super(null, null)
        this.path = path
    }

    build() {
        return '<img src="' + this.path + '" width=300 height=300 />'
    }
}

const CATEGROY_LEVEL = 2
const SUBCATEGORY_LEVEL = 3
