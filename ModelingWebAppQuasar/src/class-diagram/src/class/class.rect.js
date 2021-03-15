/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Node, Rect } from 'topology-core'

export function simpleClassIconRect(node) {
  node.iconRect = new Rect(0, 0, 0, 0)
}

export function simpleClassTextRect(node) {
  node.textRect = new Rect(node.rect.x, node.rect.y, node.rect.width, 40)
  node.fullTextRect = node.textRect
}

export function interfaceClassIconRect(node) {
  node.iconRect = new Rect(0, 0, 0, 0)
}

export function interfaceClassTextRect(node) {
  node.textRect = new Rect(node.rect.x, node.rect.y, node.rect.width, 40)
  node.fullTextRect = node.textRect
}
