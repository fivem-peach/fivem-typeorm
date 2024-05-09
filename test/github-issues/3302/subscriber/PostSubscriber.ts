import { Post } from "../entity/Post"
import { EntitySubscriberInterface, EventSubscriber } from "../../../../src"
import {
    AfterQueryEvent,
    BeforeQueryEvent,
} from "../../../../src/subscriber/event/QueryEvent"
import { PlatformTools } from "../../../../src/platform/PlatformTools"
import { getBasePath } from "../../../../src/util/getBasePath"
@EventSubscriber()
export class PostSubscriber implements EntitySubscriberInterface<Post> {
    listenTo() {
        return Post
    }

    beforeQuery(event: BeforeQueryEvent<Post>): void | Promise<any> {
        PlatformTools.appendFileSync(
            getBasePath() + "/before-query.log",
            event.query,
        )
    }

    afterQuery(event: AfterQueryEvent<Post>): void | Promise<any> {
        PlatformTools.appendFileSync(
            getBasePath() + "/after-query.log",
            event.query,
        )
    }
}
