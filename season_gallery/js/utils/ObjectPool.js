class ObjectPool {
    constructor(createFn, maxSize = 1000) {
        this.pool = [];
        this.createFn = createFn;
        this.maxSize = maxSize;
    }

    get() {
        if (this.pool.length > 0) {
            return this.pool.pop();
        }
        if (this.size() < this.maxSize) {
            return this.createFn();
        }
        return null;
    }

    release(object) {
        if (this.pool.length < this.maxSize) {
            this.pool.push(object);
        }
    }

    size() {
        return this.pool.length;
    }
}