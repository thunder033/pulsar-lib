/**
 * Created by gjr8050 on 3/8/2017.
 */

export interface Vector {
    w?: number;
    x: number;
    y: number;
    z?: number;
}

export class Vector3 implements Vector {
    public static Zero: Vector3 = Object.freeze(new Vector3(0));
    public static One: Vector3 = Object.freeze(new Vector3(1));

    public x: number;
    public y: number;
    public z: number;

    /**
     * Add the 2 vectors
     * @param a {Vector3}
     * @param b {Vector3}
     * @returns {Vector3}
     */
    public static add(a: Vector3, b: Vector3): Vector3 {
        return new Vector3(a.x + b.x, a.y + b.y, a.z + b.z);
    }

    /**
     * Subtract b from a
     * @param a {Vector3}
     * @param b {Vector3}
     * @returns {Vector3}
     */
    public static subtract(a: Vector3, b: Vector3): Vector3 {
        return new Vector3(a.x - b.x, a.y - b.y, a.z - b.z);
    }

    /**
     * Creates a new vector by multiplying a and b
     * @param a {Vector3}
     * @param b {Vector3}
     * @returns {Vector3}
     */
    public static mult(a: Vector3, b: Vector3) {
        return new Vector3(a.x * b.x, a.y * b.y, a.z * b.z);
    }

    /**
     * Creates a new vector by scaling a by scalar
     * @param a {Vector3}
     * @param scalar {number}
     * @returns {Vector3}
     */
    public static scale(a: Vector3, scalar: number): Vector3 {
        return new Vector3(a.x * scalar, a.y * scalar, a.z * scalar);
    }

    /**
     * A simple vector class
     * @param x
     * @param y
     * @param z
     * @constructor
     */
    constructor(x?: number, y?: number, z?: number) {
        this.x = x || 0;
        this.y = typeof y === 'number' ? y : x || 0;
        this.z = typeof z === 'number' ? z : x || 0;
        Object.seal(this);
    }

    /**
     * Creates a shallow copy of the vector
     * @returns {Vector3}
     */
    public clone(): Vector3 {
        return new Vector3(this.x, this.y, this.z);
    }

    /**
     * Set the vector components to those provided
     * @param {number|Vector3} x
     * @param {number} [y]
     * @param {number} [z]
     * @returns {Vector3}
     */
    public set(x?: number | Vector3, y?: number, z?: number): Vector3 {
        if (x instanceof Vector3) {
            this.x = x.x;
            this.y = x.y;
            this.z = x.z;
        } else {
            this.x = x || 0;
            this.y = typeof y === 'number' ? y : x || 0;
            this.z = typeof z === 'number' ? z : x || 0;
        }
        return this;
    }

    /**
     * Add the given vector to this one
     * @param addend {Vector3}
     */
    public add(addend: Vector3): Vector3 {
        this.x += addend.x;
        this.y += addend.y;
        this.z += addend.z;
        return this;
    }

    /**
     * Subtract the given vector to this one
     * @param addend {Vector3}
     */
    public subtract(addend: Vector3): Vector3 {
        this.x -= addend.x;
        this.y -= addend.y;
        this.z -= addend.z;
        return this;
    }

    /**
     * Scale the vector by the scalar
     * @param scalar
     * @returns {*}
     */
    public scale(scalar: number): Vector3 {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
        return this;
    }

    /**
     * Multiplies each component of the 2 vectors
     * @param factor {number}
     * @returns {*}
     */
    public mult(factor: Vector3): Vector3 {
        this.x *= factor.x;
        this.y *= factor.y;
        this.z *= factor.z;
        return this;
    }

    /**
     * Calculates the cross product of the vector and b
     * @param b {Vector3}
     * @returns {Vector3}
     */
    public cross(b: Vector3): Vector3 {
        return new Vector3(
            this.y * b.z - this.z * b.y,
            this.z * b.x - this.x * b.z,
            this.x * b.y - this.y * b.x,
        );
    }

    /**
     * Calculate the dot product of the vector and b
     * @param b {Vector3}
     * @returns {number}
     */
    public dot(b: Vector3): number {
        return this.x * b.x + this.y * b.y + this.z * b.z;
    }

    /**
     * Get the length of the vector
     * @returns {number}
     */
    public len(): number {
        return Math.sqrt(this.len2());
    }

    /**
     * Get the lengths squared of the vector
     * @returns {number}
     */
    public len2(): number {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    }

    /**
     * Normalize the vector
     * @returns {Vector3}
     */
    public normalize(): Vector3 {
        const len = this.len() || 1;
        return new Vector3(
            this.x / len,
            this.y / len,
            this.z / len);
    }

    /**
     * Create a unit vector from this vector (normalized and positive)
     * @returns {Vector3}
     */
    public unit(): Vector3 {
        const len = this.len() || 1;
        return new Vector3(
            Math.abs(this.x / len),
            Math.abs(this.y / len),
            Math.abs(this.z / len));
    }

    /**
     * Create a string representation of the vector
     * @returns {string}
     */
    public toString(): string {
        return `{${this.x.toFixed(length)}, ${this.y.toFixed(length)}, ${this.z.toFixed(length)}}`;
    }

    public toBuffer(): Float32Array {
        const buffer =  new Float32Array(3);
        buffer[0] = this.x;
        buffer[1] = this.y;
        buffer[2] = this.z;
        return buffer;
    }
}

export class Vector2 implements Vector {
    public static Zero: Vector2 = Object.freeze(new Vector2(0));
    public static One: Vector2 = Object.freeze(new Vector2(1));

    public x: number;
    public y: number;

    /**
     * Add the 2 vectors
     * @param a {Vector2}
     * @param b {Vector2}
     * @returns {Vector2}
     */
    public static add(a: Vector2, b: Vector2): Vector2 {
        return new Vector2(a.x + b.x, a.y + b.y);
    }

    /**
     * Subtract b from a
     * @param a {Vector2}
     * @param b {Vector2}
     * @returns {Vector2}
     */
    public static subtract(a: Vector2, b: Vector2): Vector2 {
        return new Vector2(a.x - b.x, a.y - b.y);
    }

    /**
     * Creates a new vector by multiplying a and b
     * @param a {Vector2}
     * @param b {Vector2}
     * @returns {Vector2}
     */
    public static mult(a: Vector2, b: Vector2): Vector2 {
        return new Vector2(a.x * b.x, a.y * b.y);
    }

    /**
     * Creates a new vector by scaling a by scalar
     * @param a {Vector3}
     * @param scalar {number}
     * @returns {Vector3}
     */
    public static scale(a: Vector2, scalar: number): Vector2 {
        return new Vector2(a.x * scalar, a.y * scalar);
    }

    /**
     * A simple vector class
     * @param x
     * @param y
     * @constructor
     */
    constructor(x?: number, y?: number) {
        this.x = x || 0;
        this.y = typeof y === 'number' ? y : x || 0;
        Object.seal(this);
    }

    /**
     * Creates a shallow copy of the vector
     * @returns {Vector3}
     */
    public clone(): Vector2 {
        return new Vector2(this.x, this.y);
    }

    /**
     * Set the vector components to those provided
     * @param {number|Vector2} x
     * @param {number} [y]
     * @returns {Vector2}
     */
    public set(x?: number | Vector2 | Vector3, y?: number): Vector2 {
        if (x instanceof Vector2 || (x as any) instanceof Vector3) {
            this.x = (x as Vector).x;
            this.y = (x as Vector).y;
        } else {
            this.x = x || 0;
            this.y = typeof y === 'number' ? y : x || 0;
        }
        return this;
    }

    /**
     * Add the given vector to this one
     * @param addend {Vector2}
     */
    public add(addend: Vector2): Vector2 {
        this.x += addend.x;
        this.y += addend.y;
        return this;
    }

    /**
     * Subtract the given vector to this one
     * @param addend {Vector2}
     */
    public subtract(addend: Vector2): Vector2 {
        this.x -= addend.x;
        this.y -= addend.y;
        return this;
    }

    /**
     * Scale the vector by the scalar
     * @param scalar
     * @returns {*}
     */
    public scale(scalar: number): Vector2 {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }

    /**
     * Multiplies each component of the 2 vectors
     * @param factor {number}
     * @returns {*}
     */
    public mult(factor: Vector2): Vector2 {
        this.x *= factor.x;
        this.y *= factor.y;
        return this;
    }

    // /**
    //  * Calculates the cross produce of the vector and b
    //  * @param b {Vector2}
    //  * @returns {Vector2}
    //  */
    // public cross(b: Vector2): Vector2 {
    //     return new Vector2(
    //         this.y * b.z - this.z * b.y,
    //         this.x * b.y - this.y * b.x,
    //     );
    // }

    /**
     * Calculate the dot product of the vector and b
     * @param b {Vector2}
     * @returns {number}
     */
    public dot(b: Vector2): number {
        return this.x * b.x + this.y * b.y;
    }

    /**
     * Get the length of the vector
     * @returns {number}
     */
    public len(): number {
        return Math.sqrt(this.len2());
    }

    /**
     * Get the lengths squared of the vector
     * @returns {number}
     */
    public len2(): number {
        return this.x * this.x + this.y * this.y;
    }

    /**
     * Normalize the vector
     * @returns {Vector2}
     */
    public normalize(): Vector2 {
        const len = this.len() || 1;
        return new Vector2(
            this.x / len,
            this.y / len);
    }

    /**
     * Create a unit vector from this vector (normalized and positive)
     * @returns {Vector2}
     */
    public unit(): Vector2 {
        const len = this.len() || 1;
        return new Vector2(
            Math.abs(this.x / len),
            Math.abs(this.y / len));
    }

    /**
     * Create a string representation of the vector
     * @returns {string}
     */
    public toString(): string {
        return `{${this.x}, ${this.y}}`;
    }

    public toBuffer(): Float32Array {
        const buffer =  new Float32Array(2);
        buffer[0] = this.x;
        buffer[1] = this.y;
        return buffer;
    }
}
